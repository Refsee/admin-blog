import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IPost, IPostRequest } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private url = environment.BACKEND_URL;
  private api = { posts: `${this.url}/posts` };

  constructor(private http: HttpClient) {}

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.api.posts);
  }

  create(post: IPostRequest): Observable<IPostRequest> {
    return this.http.post<IPostRequest>(this.api.posts, post);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api.posts}/${id}`);
  }

  update(id: number, post: IPostRequest): Observable<IPost> {
    return this.http.patch<IPost>(`${this.api.posts}/${id}`, post);
  }

}
