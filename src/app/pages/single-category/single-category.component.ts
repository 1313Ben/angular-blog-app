import { PostsService } from 'src/app/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{

  postsArray: Array<object> = []

  constructor(private route: ActivatedRoute, private postService: PostsService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(val => {
      //console.log(val['id'])
      this.postService.loadCategoryPosts(val['id']).subscribe(post => {
        this.postsArray = post;
     })
   })
  }

}
