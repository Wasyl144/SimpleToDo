import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormData } from '../../FormData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( ) { }

  @Input() Data:FormData[];

  ngOnInit(): void {
    console.log(this.Data) // dla debugowania w konsoli przeglądarki
    
  }

}
