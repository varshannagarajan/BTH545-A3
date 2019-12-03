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
    this.modFiles = [];
    this.textToAdd = '';
    this.text = '';
    this.before = false;
    this.after = false;
  }

  onSubmit(f: NgForm){
    
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let textPosition = this.m.modifiedFiles[i].name.indexOf(this.text);
      let temp = String(this.m.modifiedFiles[i].name);
      if(textPosition != -1){
        if(this.before){
          temp = this.m.modifiedFiles[i].name.slice(0, textPosition) + this.textToAdd + this.m.modifiedFiles[i].name.slice(textPosition, (this.m.modifiedFiles[i].name.length - 1));
        }
        else{
          temp = this.m.modifiedFiles[i].name.slice(0, textPosition+this.text.length) + this.textToAdd + this.m.modifiedFiles[i].name.slice(textPosition+this.text.length, (this.m.modifiedFiles[i].name.length - 1));
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
