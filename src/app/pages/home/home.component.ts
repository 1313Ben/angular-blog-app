import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  

  featuredPostsArray: Array<object> = [];
  latestPostsArray: Array<object> = [];

  constructor(private postService: PostsService) {}

  ngOnInit(): void {
    this.postService.loadFeaturedPosts().subscribe(val => {
      //console.log(val)
      this.featuredPostsArray = val;
    })

    this.postService.loadLatestPosts().subscribe(val => {
      this.latestPostsArray = val;
    })
  }

}
