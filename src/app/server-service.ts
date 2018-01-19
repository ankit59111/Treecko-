import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ServerService {
  filterString = '';
  allData: any[];
  allComments: any[];
constructor(private http: Http) {
}
setFilterString(value: string) {
  this.filterString = value;
}
getFilteredData() {
  return this.http.get(`http://assignment-server.herokuapp.com/posts?author=${this.filterString}`);
}
setFilteredData(posts: any){
  this.allData = posts;
  console.log(this.allData);
}
filterData() {
  return this.allData;
}
getAllPosts() {
  return this.http.get('http://assignment-server.herokuapp.com/posts');
}
setAllData(posts: any) {
  if (this.filterString !== '') {
    this.filterData();
  }else {
    this.allData = posts;
    return this.allData;
  }
}
getPost(index: number) {
  console.log('ab chala hai');
  return this.http.get(`http://assignment-server.herokuapp.com/posts/${index}?_embed=comments `);
}
 setComments(post: any) {
  this.allComments = post.comments;
  return this.allComments;
}
newPost(post: any) {
  this.http.post(`http://assignment-server.herokuapp.com/posts`, post).subscribe();
}
}
