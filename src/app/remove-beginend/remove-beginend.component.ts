import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-beginend',
  templateUrl: './remove-beginend.component.html',
  styles: []
})
export class RemoveBeginendComponent implements OnInit {

  modFiles: CustomFile[];
  textToAdd: string;
  text: string;
  begOrEnd: boolean;
  filename: Boolean;
  ext: Boolean;

  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.begOrEnd = true;
  }

  onSubmit(f: NgForm) {
    let charsToRemove = parseInt(this.text);
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let temp = String(this.m.modifiedFiles[i].name);
      if(this.m.modifiedFiles[i].name.length-1 > charsToRemove){
        if(this.begOrEnd){
          temp = this.m.modifiedFiles[i].name.slice(charsToRemove, (this.m.modifiedFiles[i].name.length - 1));
        }
        else{
          temp = this.m.modifiedFiles[i].name.slice(0, (this.m.modifiedFiles[i].name.length - charsToRemove));
        }
      }
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
