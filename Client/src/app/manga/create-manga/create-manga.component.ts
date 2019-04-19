import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MangaService } from '../manga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-manga',
  templateUrl: './create-manga.component.html',
  styleUrls: ['./create-manga.component.css']
})
export class CreateMangaComponent implements OnInit {
  form;
  constructor(
    private fb:FormBuilder, 
    private mangaService:MangaService,
    private router:Router
    ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title:['',Validators.required],
      description:['',Validators.required],
      price:['',Validators.required],
      author:['',Validators.required],
      image:['',Validators.required]
    })
  }

  addNewManga(){
    this.mangaService
      .create(this.form.value)
      .subscribe(() =>{
        this.router.navigate(['/home']);
      })
  }
  

  get f(){
    return this.form.controls;
  }

}
