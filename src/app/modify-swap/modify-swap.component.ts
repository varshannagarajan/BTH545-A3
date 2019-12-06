import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-swap',
  templateUrl: './modify-swap.component.html',
  styles: []
})
export class ModifySwapComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  replaceText: string;

  constructor(private m: FileService) {}

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.replaceText = '';
    }

  onSubmit(f: NgForm){
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let textPosition = this.m.modifiedFiles[i].name.indexOf(this.text);
      let temp = String(this.m.modifiedFiles[i].name);
      if(textPosition != -1){
         temp = this.m.modifiedFiles[i].name.slice(textPosition + this.text.length, (this.m.modifiedFiles[i].name.length )) + this.text + this.m.modifiedFiles[i].name.slice(0, textPosition);
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
