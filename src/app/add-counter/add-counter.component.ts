import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'app/file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-counter',
  templateUrl: './add-counter.component.html',
  styles: []
})
export class AddCounterComponent implements OnInit {

  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  text: string;
  before: Boolean;
  after: Boolean;
  padding: string;

  constructor(
    private route: ActivatedRoute,
    private m: FileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ogFiles = this.m.originalFiles;
    this.modFiles = [];
    this.before = false;
    this.after = false;
    this.padding = '0';
  }

  padZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

  onSubmit(f:NgForm){
    var pad = parseInt(this.padding);
    console.log(this.after);
    for(let i = 0; i < this.ogFiles.length; i++){
      
      let dotPosition = this.ogFiles[i].name.indexOf(".");
      console.log(dotPosition);
      var temp = this.ogFiles[i].name;
      if (dotPosition != -1){
        if(this.before){
          temp = '' + this.padZeros(i,pad) + this.ogFiles[i].name;
        }
        else{
          temp = '' + this.ogFiles[i].name.slice(0, dotPosition) + this.padZeros(i,pad) + this.ogFiles[i].name.slice(dotPosition, this.ogFiles[i].name.length-1);
        }
      }
      else{
        if(this.before){
          temp = '' + this.padZeros(i,pad) + this.ogFiles[i].name;
        }
        else{
          temp = this.ogFiles[i].name + this.padZeros(i,pad);
        }
      }
      var modFile = this.ogFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
   
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }
}
