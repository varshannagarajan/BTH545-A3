import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'app/file.service';

@Component({
  selector: 'app-add-counter',
  templateUrl: './add-counter.component.html',
  styles: []
})
export class AddCounterComponent implements OnInit {

  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  text: string;
  before: Boolean;
  after: Boolean;
  padding: string;

  constructor(
    private route: ActivatedRoute,
    private m: FileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ogFiles = this.m.originalFiles;
    this.before = false;
    this.after = false;
    this.padding = '0';
  }

  OnSubmit(){
    var pad = parseInt(this.padding);
    for(let i = 0; i < this.ogFiles.length; i++){
      let dotPosition = this.ogFiles[i].name.search('.');
      var temp = this.ogFiles[i].name;
      if (dotPosition != -1){
        if(this.before){
          temp = '' + i + this.ogFiles[i].name;
        }
        else{
          temp = '' + this.ogFiles[i].name.slice(0, dotPosition) + i + this.ogFiles[i].name.slice(dotPosition+1, this.ogFiles[i].name.length-1);
        }
      }
      else{
        if(this.before){
          temp = '' + i + this.ogFiles[i].name;
        }
        else{
          temp = this.ogFiles[i].name + i;
        }
      }
      var modFile = this.ogFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
  }
}
