import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { FileService } from 'app/file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styles: []
})
export class AddPositionComponent implements OnInit {

  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  text: string;
  before: boolean;
  after: boolean;
  position: string;

  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.before = false;
    this.after = false;
    this.position = '0';
  }

  onSubmit(f:NgForm){
    var pos = parseInt(this.position);
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      var temp = this.m.modifiedFiles[i].name;
      if(pos < this.m.modifiedFiles[i].name.length){
        temp = this.m.modifiedFiles[i].name.slice(0, pos-1) + this.text + this.m.modifiedFiles[i].name.slice(pos, this.m.modifiedFiles[i].name.length-1);
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
