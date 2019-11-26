import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta-time',
  templateUrl: './meta-time.component.html',
  styles: []
})
export class MetaTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  timeFormat : string;
  location: boolean;

  addDate(fileNames): void {
    fileNames.forEach(element => {
      if (element.date) {
        //"2019-01-16"
        let currT = element.date.split("T");
        let curr = currT[1].split(":")
        let HH = curr[0];
        let MM = curr[1];
        let SS = curr[2]
        let cur_time;
        switch (this.timeFormat) {
          case "HH:MM:SS":
            if (location)
            cur_time = HH + "-" + MM + "-" + SS + "_";
            else {
              cur_time            }
            break;
          case "HH:MM":
            if (location) {
              cur_time = HH + "-" + MM + "_"
            }
            else {
              cur_time = "_" + HH + "-" + MM;
            }
            break;

        }
        if (location) {
          element.name = cur_time + element.name;
        }
        else {
          var temp = element.name.split(".")
          temp[0] += (cur_time + temp[1]);
          element.name = temp[0];
        }
      }
    }

    )
  }



}
