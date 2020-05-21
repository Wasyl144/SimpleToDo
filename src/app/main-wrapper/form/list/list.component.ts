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
    
  }

  onClick(id: number) {
    this.delData.emit(id);
  }

}
