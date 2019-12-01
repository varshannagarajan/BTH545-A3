import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'app/file.service';

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
    this.ogFiles = this.m.originalFiles;
    this.before = false;
    this.after = false;
  }

  OnSubmit(){
    
    for(let i = 0; i < this.ogFiles.length; i++){
      let dotPosition = this.ogFiles[i].name.search('.');
      let temp = this.ogFiles[i].name;
      if(this.ext){
        if(this.before){
          temp = this.ogFiles[i].name.slice(0, dotPosition) + this.text + this.ogFiles[i].name.slice(dotPosition + 1, (this.ogFiles[i].name.length - 1))
        }
        else if(this.after){
          temp =  this.ogFiles[i].name + this.text;
        }
      }
      else{
        if(this.before){
          temp = this.text + this.ogFiles[i].name;
        }
        else if(this.after){
          temp = this.ogFiles[i].name.slice(0, dotPosition-1) + this.text + this.ogFiles[i].name.slice(dotPosition, (this.ogFiles[i].name.length - 1))
        }
      }
      var modFile = this.ogFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
  }

}
