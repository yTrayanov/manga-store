import { Component, OnInit } from '@angular/core';
import IManga from 'src/app/interfaces/IManga';
import { MangaService } from '../manga.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-manga',
  templateUrl: './details-manga.component.html',
  styleUrls: ['./details-manga.component.css']
})
export class DetailsMangaComponent implements OnInit {
  id:string; 
  manga:IManga;
  constructor(
    private mangaService:MangaService ,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });

    this.mangaService.getMangaById(this.id)
      .subscribe((data) =>{
        this.manga = data;
      })
  }

}
