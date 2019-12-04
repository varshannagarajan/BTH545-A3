import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-position',
  templateUrl: './remove-position.component.html',
  styles: []
})
export class RemovePositionComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  beforeOrAfter: boolean;


  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.beforeOrAfter = true;

  }

  onSubmit(f: NgForm) {
    let charsToRemove = parseInt(this.text);
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let temp = String(this.m.modifiedFiles[i].name);
      if(charsToRemove < this.m.modifiedFiles[i].name.length){
        if(this.beforeOrAfter){
          temp = this.m.modifiedFiles[i].name.slice(charsToRemove, (this.m.modifiedFiles[i].name.length-1))
        }
        else{
          temp = this.m.modifiedFiles[i].name.slice(0, (this.m.modifiedFiles[i].name.length-1-charsToRemove))
        }
      }
      console.log(temp);
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
