import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService{
constructor(private http: Http) {
}
getAllPosts() {
  return this.http.get('http://assignment-server.herokuapp.com/posts');
}

getPost(index: number) {
  return this.http.get(`http://assignment-server.herokuapp.com/posts/${index}?_embed=comments `);
}

newPost(post: any) {
  this.http.post(`http://assignment-server.herokuapp.com/posts`, post).subscribe();
}

postComment(comment: any) {
  this.http.post(`http://assignment-server.herokuapp.com/posts`, comment).subscribe();
}
}
