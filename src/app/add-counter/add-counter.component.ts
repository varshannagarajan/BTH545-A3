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

  modFiles: CustomFile[];
  text: string;
  beforeOrAfter: boolean;
  padding: string;

  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.beforeOrAfter = true;
    this.padding = '0';
  }

  padZeros(num, size) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  onSubmit(f:NgForm) {
    var pad = parseInt(this.padding);
    for(let i = 0; i < this.m.modifiedFiles.length; i++) {
      let dotPosition = this.m.modifiedFiles[i].name.indexOf('.');
      var temp = this.m.modifiedFiles[i].name;
      if (dotPosition != -1) {
        if(this.beforeOrAfter) {
          temp = '' + this.padZeros(i,pad) + this.m.modifiedFiles[i].name;
        } else {
          temp = '' + this.m.modifiedFiles[i].name.slice(0, dotPosition) + this.padZeros(i,pad) + this.m.modifiedFiles[i].name.slice(dotPosition, this.m.modifiedFiles[i].name.length-1);
        }
      } else {
        if(this.beforeOrAfter) {
          temp = '' + this.padZeros(i,pad) + this.m.modifiedFiles[i].name;
        } else {
          temp = this.m.modifiedFiles[i].name + this.padZeros(i,pad);
        }
      }
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    this.ngOnInit();
    console.log(this.m.modifiedFiles);
  }
}
