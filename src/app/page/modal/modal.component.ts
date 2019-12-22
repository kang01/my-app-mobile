import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      }
    }
  ];
  footer2 = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal2');
      }
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  modelChange(event) {
    console.log('asdfasdf', event);
  }
  onClose(key) {
    this.state[key] = false;
  }

  showModal(key) {
    this.state[key] = true;
  }

  renderHeader() {
    return '委托买入';
  }

}
