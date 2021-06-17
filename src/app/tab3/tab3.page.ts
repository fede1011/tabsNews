import { Component, OnInit } from '@angular/core';
import { ApiNewsService } from '../services/api-news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  // dataNews = Mynews;
  dataNews;


  constructor(private myApi: ApiNewsService) {

  }
  ngOnInit(){
    this.myApi.getTopLineHeads('entertainment').subscribe(resp=>{
      console.log(resp.articles);
      
      this.dataNews = resp.articles;
    });
  }




}
