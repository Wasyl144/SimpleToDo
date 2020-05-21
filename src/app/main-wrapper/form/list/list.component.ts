import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormData } from '../../FormData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( ) { }

  @Input() Data:FormData[];
  @Output() delData=new EventEmitter();

  ngOnInit(): void {
    console.log(this.Data) // dla debugowania w konsoli przeglądarki
    
  }

  onClick(id: number) {
    console.log(id);
    this.delData.emit(id);
  }

}
