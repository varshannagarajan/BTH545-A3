import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'app/file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styles: []
})
export class AddPositionComponent implements OnInit {

  ogFiles: CustomFile[];
  modFiles: CustomFile[];
  text: string;
  before: Boolean;
  after: Boolean;
  position: string;

  constructor(
    private route: ActivatedRoute,
    private m: FileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ogFiles = this.m.originalFiles;
    this.modFiles = [];
    this.before = false;
    this.after = false;
    this.position = '0';
  }

  onSubmit(f:NgForm){
    var pos = parseInt(this.position);
    for(let i = 0; i < this.ogFiles.length; i++){
      var temp = this.ogFiles[i].name;
      if(pos < this.ogFiles[i].name.length){
        temp = this.ogFiles[i].name.slice(0, pos-1) + this.text + this.ogFiles[i].name.slice(pos, this.ogFiles[i].name.length-1);
      }
      var modFile = this.ogFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
