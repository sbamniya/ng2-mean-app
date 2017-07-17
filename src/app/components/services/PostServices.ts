import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable() //to make module injectable to other controllers/directives/services/factories etc.

export class PostServices {
	host = 'https://jsonplaceholder.typicode.com/';
	
	/*Constructor of service*/
	constructor(private http: Http) {
		// code...
	}

	/*Get All Posts*/
	getPosts(){
		return this.http.get(this.host+'posts').map(res => res.json());
	}

	/*Get post by postID*/
	getPostByID(id){
			return this.http.get(this.host+'posts/'+id).map(res => res.json());
	}

	/*Get Comments on Posts By postID*/
	getCommentsByPostID(id){
		return this.http.get(this.host+'posts/'+id+'/comments').map(res => res.json());
	}
}