import { Component, OnInit } from '@angular/core';
import IManga from 'src/app/interfaces/IManga';
import { MangaService } from '../manga.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-all-manga',
  templateUrl: './all-manga.component.html',
  styleUrls: ['./all-manga.component.css']
})
export class AllMangaComponent implements OnInit {
  manga:IManga[];
  constructor(
    private mangaService:MangaService,
    public authService:AuthService,
    private router:Router
    ) { }

  ngOnInit() {
    this.mangaService.getAllManga()
      .subscribe((data) =>{
        this.manga = data
    });
  }

  addToCart(id:string){

    let object = {mangaId:id , userId:this.authService.getUserId()};

    this.mangaService
      .addMangaToUser(object)
      .subscribe((data) =>{
      })
  }

  removeManga(id:string){
    this.mangaService
      .removeManga(id)
      .subscribe((data) =>{
        this.router.navigateByUrl('/manga/cart', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/manga"]));
      });
  }

}
