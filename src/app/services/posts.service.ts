import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getPosts(){
    return [
      {
        title: 'No Longer Human',
        description: 'depression/suicide/alcohol/lost',
        author: 'Osamu Dazai'

      },
      {
        title: 'Mistborn',
        description: 'fantasy/heist/action/Kelsier',
        author: 'Brandon Sanderson'
      }
    ]
  }
}
