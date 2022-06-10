import { Component, OnInit } from '@angular/core';
import { IPost, IPostRequest } from 'src/app/shared/interfaces/post.interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public posts!: IPost[];

  public title: string = '';
  public message: string = '';
  public author: string = '';

  public isEdit: boolean = false;
  public editID!: number;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  resetForm(): void {
    this.title = '';
    this.message = '';
    this.author = '';
  }

  createPost(): IPostRequest {
    return {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUuSKIbKRYBPgbDkM5tNXpiDUAZ86gJiPSw&usqp=CAU',
      title: this.title,
      message: this.message,
      posterBy: this.author,
    };
  }

  getPosts(): void {
    this.blogService.getAll().subscribe((data) => (this.posts = data));
  }

  addPost(): void {
    const post = this.createPost();
    this.blogService.create(post).subscribe(() => {
      this.getPosts();
      this.resetForm();
    });
  }

  deletePost(id: number): void {
    this.blogService.delete(id).subscribe(() => this.getPosts());
  }

  editPost(data:IPost): void {
      this.title = data.title;
      this.message = data.message;
      this.author = data.posterBy;
      this.editID = data.id;
      this.isEdit = true;
  }

  upDate(): void {
    const upDatepost = this.createPost();
    this.blogService.update(this.editID, upDatepost).subscribe(() => {
      this.getPosts();
      this.resetForm();
      this.isEdit = false;
    });
  }
}
