import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsService {


  constructor( private http: HttpClient) { 
  }

  getTopLineHeads(category): Observable <any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=co&category='+category+'&apiKey=6632a6cb9627485289618582f5db9554').pipe();
  }
}
