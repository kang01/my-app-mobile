import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state = {
    selected: ''
  };
  constructor() { }

  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }

  onVisibleChange(event) {
    console.log(event);
  }

  onLeftClick() {
    console.log('onLeftClick');
  }
  choose(event) {
    console.log('index: ', event.selectedIndex, 'value: ', event.value);
  }

}
