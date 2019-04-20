import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import IManga from 'src/app/interfaces/IManga';
import { MangaService } from '../manga.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-manga',
  templateUrl: './edit-manga.component.html',
  styleUrls: ['./edit-manga.component.css']
})
export class EditMangaComponent implements OnInit {
  id:string;
  manga:IManga;
  form;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private mangaService:MangaService,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.nullValidator],
      price:['',Validators.required],
      author:['',Validators.required],
      image:['',Validators.required]
    })

    this.route.params.subscribe((params:Params) => {
      this.id = params['id'];
    })

    this.mangaService.getMangaById(this.id)
      .subscribe((data) =>{
        this.manga = data;
      })

  }
  editManga(){

    let body = this.checkForChangesAndReturnObject(this.form.value);
    this.mangaService
      .editManga(body,this.id)
      .subscribe((data)=>{
        this.router.navigate([`/details/${this.id}`])
      });
  }

  get f(){
    return this.form.controls;
  }

  checkForChangesAndReturnObject(body){
    const author = body.author;
    const title = body.title;
    const price = body.price;
    const description = body.description;
    const image = body.image;

    let result ={
      'author': author !== '' ? author : this.manga.author,
      'title' : title !== '' ? title : this.manga.title,
      'price' : price !== '' ? price : this.manga.price,
      'description' : description !== '' ? description : this.manga.description,
      'image' : image !== '' ? image : this.manga.image,
    };

    return result;
    
  }

}
