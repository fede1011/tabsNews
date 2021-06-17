import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../services/api-news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // dataNews = Mynews;
  dataNews;


  constructor(private myApi: ApiNewsService) {

  }
  ngOnInit(){
    this.myApi.getTopLineHeads('health').subscribe(resp=>{
      console.log(resp.articles);
      
      this.dataNews = resp.articles;
    });
  }




}
