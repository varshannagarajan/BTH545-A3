import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meta-location',
  templateUrl: './meta-location.component.html',
  styles: []
})
export class MetaLocationComponent implements OnInit {
  modFiles: CustomFile[];
  beforeOrAfter: boolean;
  filename: Boolean;
  ext: Boolean;

  constructor( private m: FileService) { }

  ngOnInit() {
    this.modFiles = [];
    this.beforeOrAfter = true;
  }

  onSubmit(f: NgForm) {
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      let temp = String(this.m.modifiedFiles[i].name);
      let varshanchoice = this.m.modifiedFiles[i].location;
        if(this.beforeOrAfter){
          temp = this.m.modifiedFiles[i].name + '_' + varshanchoice;
        }
        else{
          temp = varshanchoice + '_' + this.m.modifiedFiles[i].name;
        }

      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
