import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/shared/interfaces/post.interface';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public posts!:IPost[] 

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    this.getPosts()
  }

  getPosts():void{
    this.blogService.getAll().subscribe(data=>this.posts=data)
  }
}
