import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import BScroll from "@better-scroll/core";

@Component({
  selector: "app-scroll",
  templateUrl: "./scroll.component.html",
  styleUrls: ["./scroll.component.css"]
})
export class ScrollComponent implements OnInit {
  @ViewChild("wrapper", { static: false }) wrapper: ElementRef;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    let scroll = new BScroll(this.wrapper.nativeElement);
    console.log(scroll);
  }
}
