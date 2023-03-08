import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit{

  postData: any;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }
  
  ngOnInit(): void {

    this.route.params.subscribe(val => {
      this.postService.loadOnePost(val['id']).subscribe(post => {
        //console.log(post)
        this.postData = post;
      })
    })
  }

}
