import { Component, OnInit } from '@angular/core';
import IManga from 'src/app/interfaces/IManga';
import { MangaService } from '../manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  manga:IManga[];
  constructor(
    private mangaService:MangaService,
    private router:Router
    ) { }

  ngOnInit() {
    this.mangaService
      .getUserManga()
      .subscribe((data) =>{
        this.manga = data;
      })
  }

  buyManga(id:string){
    this.removeManga(id);
  }

  removeManga(id:string){
    this.mangaService
      .removeMangaFromUser(id)
      .subscribe((data)=>{
        this.router.navigateByUrl('/home', {skipLocationChange: true}).then(()=>
        this.router.navigate(["/cart"]));
      });
  }

}
