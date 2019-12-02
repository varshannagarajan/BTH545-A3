import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

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
    this.modFiles = [];
    this.textToAdd = '';
    this.text = '';
    this.before = false;
    this.after = false;
  }

  onSubmit(f: NgForm){
    
    for(let i = 0; i < this.ogFiles.length; i++){
      let textPosition = this.ogFiles[i].name.indexOf(this.text);
      let temp = this.ogFiles[i].name;
      if(textPosition != -1){
        if(this.before){
          temp = this.ogFiles[i].name.slice(0, textPosition) + this.textToAdd + this.ogFiles[i].name.slice(textPosition, (this.ogFiles[i].name.length - 1));
        }
        else{
          temp = this.ogFiles[i].name.slice(0, textPosition+this.text.length) + this.textToAdd + this.ogFiles[i].name.slice(textPosition+this.text.length, (this.ogFiles[i].name.length - 1));
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
