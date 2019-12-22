import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"]
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  name = "选择";
  value = new Date();

  currentDateFormat(date, format: string = "yyyy-mm-dd HH:MM"): any {
    const pad = (n: number): string => (n < 10 ? `0${n}` : n.toString());
    if(![0,10,20,30,40,50].includes(date.getMinutes())) {
      date.setMinutes(0);
    }
    return format
      .replace("yyyy", date.getFullYear())
      .replace("mm", pad(date.getMonth() + 1))
      .replace("dd", pad(date.getDate()))
      .replace("HH", pad(date.getHours()))
      .replace("MM", pad(date.getMinutes()))
      .replace("ss", pad(date.getSeconds()));
  }
  changeDate(event) {
    console.log(event);
    
    console.log("进来了");
  }
  onOk(result: Date) {
    console.log(result);
    
    this.name = this.currentDateFormat(result);
    this.value = result;
  }

  formatIt(date: Date, form: string) {
    const pad = (n: number) => (n < 10 ? `0${n}` : n);
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    if (form === "YYYY-MM-DD") {
      return dateStr;
    }
    if (form === "HH:mm") {
      return timeStr;
    }
    return `${dateStr} ${timeStr}`;
  }
}
