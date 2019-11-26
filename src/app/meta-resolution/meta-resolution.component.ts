import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meta-resolution',
  templateUrl: './meta-resolution.component.html',
  styles: []
})
export class MetaResolutionComponent implements OnInit {

  constructor(files: File[]) { }

  ngOnInit() {
  }
  length: boolean;
   width: boolean;
   delim: string;
   Front: boolean;


  Resolution(fileNames) : void {
    fileNames.forEach(element => {
      if(this.Front){
      if(this.length)
      {
        element.name = element['x-resolution'] + this.delim + element.name;
      }
      if(this.width)
      {
        element.name = element['y-resolution'] + this.delim + element.name;
      }
    }
    else {
      if(this.length)
      {
       let temp = element.name.split('.');
       element.name = temp[0] + this.delim + this.length + temp[1];
      }
      if(this.width){
      let temp = element.name.split('.');
      element.name = temp[0] + this.delim + this.length + temp[1];
      }
    }



  });

  }

}
