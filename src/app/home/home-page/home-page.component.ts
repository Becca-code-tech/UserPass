import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  Posts: any;

  constructor(private posts: PostsService) { }

  ngOnInit(): void {
    this.Posts = this.posts.getPosts();
  }

  

}
