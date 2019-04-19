import { Component, OnInit } from '@angular/core';
import IManga from 'src/app/interfaces/IManga';
import { MangaService } from '../manga.service';

@Component({
  selector: 'app-all-manga',
  templateUrl: './all-manga.component.html',
  styleUrls: ['./all-manga.component.css']
})
export class AllMangaComponent implements OnInit {
  manga:IManga[];
  constructor(private mangaService:MangaService) { }

  ngOnInit() {
    this.mangaService.getAllManga()
      .subscribe((data) =>{
        this.manga = data
    });
  }

  addToCart(id:string){
    console.log(id);
  }

}
