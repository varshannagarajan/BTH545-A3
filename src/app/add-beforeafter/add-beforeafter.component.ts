import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomFile } from '../file';
import { FileService } from '../file.service';

@Component({
  selector: 'app-add-beforeafter',
  templateUrl: './add-beforeafter.component.html',
  styles: []
})
export class AddBeforeafterComponent implements OnInit {
  
  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  textToAdd: string;
  text: string;
  before: Boolean;
  after: Boolean;
  filename: Boolean;
  ext: Boolean;

  constructor(
    private route: ActivatedRoute,
    private m: FileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ogFiles = this.m.originalFiles;
    this.before = false;
    this.after = false;
  }

  OnSubmit(){
    
    for(let i = 0; i < this.ogFiles.length; i++){
      let textPosition = this.ogFiles[i].name.search(this.text);
      if(textPosition != -1){
        let dotPosition = this.ogFiles[i].name.search('.');
        let temp = this.ogFiles[i].name;
        if(this.ext && dotPosition < textPosition){
          if(this.before){
            temp = this.ogFiles[i].name.slice(0, dotPosition) + this.ogFiles[i].name.slice(dotPosition + 1, textPosition) + this.textToAdd + this.ogFiles[i].name.slice(textPosition + 1, (this.ogFiles[i].name.length - 1));
          }
          else if(this.after){
            temp = this.ogFiles[i].name.slice(0, dotPosition) + this.ogFiles[i].name.slice(dotPosition + 1, textPosition + this.textToAdd.length) + this.textToAdd + this.ogFiles[i].name.slice(textPosition + this.textToAdd.length, (this.ogFiles[i].name.length - 1));
          }
        }
        else{
          if(this.before){
            temp = this.ogFiles[i].name.slice(0, textPosition) + this.textToAdd + this.ogFiles[i].name.slice(textPosition + 1, (this.ogFiles[i].name.length - 1));
          }
          else if(this.after){
            temp = this.ogFiles[i].name.slice(0, textPosition + this.textToAdd.length) + this.textToAdd + this.ogFiles[i].name.slice(textPosition + this.textToAdd.length, (this.ogFiles[i].name.length - 1))
          }
        }
        var modFile = this.ogFiles[i];
        modFile.name = temp;
        this.modFiles.push(modFile);
      }
      this.m.modifiedFiles = this.modFiles;
    }
  }

}
