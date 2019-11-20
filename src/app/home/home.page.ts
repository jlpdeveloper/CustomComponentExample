import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Title: string = 'My Custom Component';
  Items = ['lorem', 'ipsum', 'test'];
  constructor() {}
  OnEventReceived = function(evt){
    console.log(evt);
    alert(evt);
  }
}
