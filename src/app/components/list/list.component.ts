import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() Title:string;
  @Input() items: Array<string>;
  @Output() ClickVal = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {}

  onClick = function(){
    this.ClickVal.emit(true);
  }

}
