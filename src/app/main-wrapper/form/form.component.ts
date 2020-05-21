import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormData } from '../FormData'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  formData = new FormGroup({
    'task': new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(80),
    ]),
    'date': new FormControl('',[
      Validators.required,
    ]),
    'isAccept': new FormControl('',[
      Validators.requiredTrue,
    ]),
  })


  ngOnInit(): void {

  }

  //zmienne pomocnicze
  data: FormData; //Interfejs który gromadzi nasze dane
  id: number = 0; //numer identyfikacyjny
  //Tablica za której pomocą będziemy przekazywać dane
  datas: FormData[]=[];
  //Funkcja która transferuje dane.
  onSubmit() {
    this.data= {
      task: this.formData.value.task,
      date: this.formData.value.date,
      id: this.id,
    } //przypisanie wartości z formularza
    this.datas.push(this.data); //przypisanie wartości do tablicy
    this.id=this.id+1;// zmiana id
    return
  }

}
