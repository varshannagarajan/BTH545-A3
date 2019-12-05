import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-findreplace',
  templateUrl: './modify-findreplace.component.html',
  styles: []
})
export class ModifyFindreplaceComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  replaceText: string;

  constructor(private m: FileService) { 
  
  }

  ngOnInit() {
  this.modFiles = [];
  this.text = '';
  this.replaceText = '';
  }

  onSubmit(f: NgForm){
    
    for(let i = 0; i < this.m.modifiedFiles.length; i++){

      let temp = this.m.modifiedFiles[i].name.replace(this.text, this.replaceText);

      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles); 
  }
}
