import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.text = '';
    this.before = false;
    this.after = false;
    this.filename = false;
    this.ext = false;
  }

  onSubmit(f:NgForm){
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let dotPosition = this.m.modifiedFiles[i].name.indexOf(".");
      let temp = this.m.modifiedFiles[i].name;
      if(this.ext){
        if(this.before){
          temp = this.m.modifiedFiles[i].name.slice(0, dotPosition+1) + this.text + this.m.modifiedFiles[i].name.slice(dotPosition+1, (this.m.modifiedFiles[i].name.length - 1));
        }
        else if(this.after){
          temp =  this.m.modifiedFiles[i].name + this.text;
        }
      }
      else{
        if(this.before){
          temp = this.text + this.m.modifiedFiles[i].name;
        }
        else if(this.after){
          temp = this.m.modifiedFiles[i].name.slice(0, dotPosition) + this.text + this.m.modifiedFiles[i].name.slice(dotPosition, (this.m.modifiedFiles[i].name.length - 1));
        }
      }
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    this.modFiles = [];
    console.log(this.m.modifiedFiles);
  }

}
