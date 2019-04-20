import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IManga from '../interfaces/IManga';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MangaService {
  private readonly baseUrl = 'http://localhost:5000/manga/';

  constructor(private http:HttpClient, private authService:AuthService) { }

  create(body){
    return this.http.post(this.baseUrl + 'create',body);
  }

  getAllManga(): Observable<Array<IManga>> {
    return this.http.get<Array<IManga>>(this.baseUrl + 'all');
  }

  getMangaById(id:string):Observable<IManga>{
    return this.http.get<IManga>(this.baseUrl + `details/${id}`);
  }

  addMangaToUser(body){
    return this.http.post(this.baseUrl + `add`,body);
  }

  getUserManga(){
    let id = this.authService.getUserId();
    return this.http.get<IManga[]>(this.baseUrl +`user/${id}`)
  }

  removeMangaFromUser(id:string){
    return this.http.post(this.baseUrl + 'user/remove',{'mangaid':id ,'userid':this.authService.getUserId()})
  }

  removeManga(id:string){
    return this.http.delete(this.baseUrl + `/remove/${id}`);
  }
}
