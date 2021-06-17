import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../services/api-news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  // dataNews = Mynews;
  dataNews;


  constructor(private myApi: ApiNewsService) {

  }
  ngOnInit(){
    this.myApi.getTopLineHeads('business').subscribe(resp=>{
      console.log(resp.articles);
      
      this.dataNews = resp.articles;
    });
  }




}
