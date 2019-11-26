import { Component, OnInit } from '@angular/core';
import { FileService } from '../file.service';

@Component({
  selector: 'app-meta-location',
  templateUrl: './meta-location.component.html',
  styles: []
})
export class MetaLocationComponent implements OnInit {


  constructor(files: File[]) { }

  ngOnInit() {

  }
   city: boolean;
   prov: boolean;
   delim: string;
   Front: boolean;


  addLocation(fileNames): void {

    fileNames.forEach(element => {
      if (this.city) {
        if (this.Front) {
          element.name = element.location + this.delim + element.name;
        }
        else {
          let temp = element.split(".");
          temp[0] += (this.delim + element.location + temp[1]);
          element.name = temp[0];
        }
      }
      if (this.prov) {
        let province;
        if (element['y-resolution'] > 2000){
          province = "Ontario"
        }
        else {
          province = "Quebec"
        }
        if (this.Front) {
          element.name = province + this.delim + element.name;
        }
        else {
          let temp = element.split(".");
          temp[0] += (this.delim + province + temp[1]);
          element.name = temp[0];
        }
      }
    })

  }
}

