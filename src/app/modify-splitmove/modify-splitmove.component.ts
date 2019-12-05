import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-splitmove',
  templateUrl: './modify-splitmove.component.html',
  styles: []
})
export class ModifySplitmoveComponent implements OnInit {

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
      let textPosition = this.m.modifiedFiles[i].name.indexOf(this.text);
      let temp = [];
      let temp2 = '';
      
        temp = this.m.modifiedFiles[i].name.split(this.text, 2);
        if(temp[1] != null) 
        temp2 = temp[0] + temp[1];
        else
        temp2 = temp[0];
        
        temp[0] = null;
        temp[1] = null;  
        
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp2;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
    
  }
}
