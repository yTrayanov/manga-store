import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IManga from '../interfaces/IManga';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly baseUrl = 'http://localhost:5000/manga/';

  constructor(private http:HttpClient) { }

  create(body){
    return this.http.post(this.baseUrl + 'create',body);
  }

  getAllManga(): Observable<Array<IManga>> {
    return this.http.get<Array<IManga>>(this.baseUrl + 'all');
  }

  getMangaById(id:string):Observable<IManga>{
    return this.http.get<IManga>(this.baseUrl + `details/${id}`);
  }
}
