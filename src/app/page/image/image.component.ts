import { Component, OnInit } from '@angular/core';
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  files = data.slice(0);
  multiple = false;
  multipleTab = 0;

  changeMultiple(value: number) {
    this.multipleTab = value;
  }

  fileChange(params) {
    console.log(params);
    const { files, type, index } = params;
    this.files = files;
  }

  imageClick(params) {
    console.log(params);
  }

}
