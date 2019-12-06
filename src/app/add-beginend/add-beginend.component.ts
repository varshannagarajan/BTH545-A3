import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { FileService } from 'app/file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-beginend',
  templateUrl: './add-beginend.component.html',
  styles: []
})
export class AddBeginendComponent implements OnInit {

  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  text: string;
  beforeOrAfter: boolean;
  filename: boolean;
  ext: boolean;

  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.beforeOrAfter = true;
    this.filename = false;
    this.ext = false;
  }

  onSubmit(f: NgForm) {
    for (let i = 0; i < this.m.modifiedFiles.length; i++) {
      let dotPosition = this.m.modifiedFiles[i].name.indexOf(".");
      let temp = this.m.modifiedFiles[i].name;
      if (this.ext) {
        if (this.beforeOrAfter) {
          temp = this.m.modifiedFiles[i].name.slice(0, dotPosition + 1) + this.text + this.m.modifiedFiles[i].name.slice(dotPosition + 1, (this.m.modifiedFiles[i].name.length - 1));
        } else {
          temp =  this.m.modifiedFiles[i].name + this.text;
        }
      } else {
        if (this.beforeOrAfter) {
          temp = this.text + this.m.modifiedFiles[i].name;
        } else {
          temp = this.m.modifiedFiles[i].name.slice(0, dotPosition) + this.text + this.m.modifiedFiles[i].name.slice(dotPosition, (this.m.modifiedFiles[i].name.length - 1));
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
