import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-meta-date',
  templateUrl: './meta-date.component.html',
  styles: []
})




export class MetaDateComponent implements OnInit {



  constructor(private files: FileService) {

  }

  ngOnInit() {
  }

  addDate(fileNames): void {
    let myVar = document.getElementById('dateformat').nodeValue;
    let location = document.getElementById('location').nodeValue;
    fileNames.forEach(element => {
      if (element.date) {
        //"2019-01-16"
        let currDate = element.date.split("-");
        let year = currDate[0];
        let month = currDate[1];
        let day = currDate[2]
        let cur_date;
        switch (myVar) {
          case "YYYY-MM-DD":
            if (location)
              cur_date = year + "-" + month + "-" + day + "_";
            else {
              cur_date = "_" + year + "-" + month + "-" + day;
            }
            break;
          case "MM-DD":
            if (location) {
              cur_date = month + "-" + day + "_"
            }
            else {
              cur_date = "_" + month + "-" + day;
            }
            break;
          case "YYYY":
            if (location)
              cur_date = year + "_"
            else {
              cur_date = "_" + year;
            }
            break;
          case "MM":
            if (location)
              cur_date = month + "_";
            else {
              cur_date = "_" + month;
            }
            break;
        }
        if (location) {
          element.name = cur_date + element.name;
        }
        else {
          var temp = element.name.split(".")
          temp[0] += (cur_date + temp[1]);
          element.name = temp[0];
        }
      }
    }

    )
  }



}

