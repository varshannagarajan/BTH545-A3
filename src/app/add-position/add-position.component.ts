import { Component, OnInit } from '@angular/core';
import { CustomFile } from 'app/file';
import { ActivatedRoute, Router } from '@angular/router';
import { FileService } from 'app/file.service';

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
    this.before = false;
    this.after = false;
    this.position = '0';
  }

  OnSubmit(){
    var pos = parseInt(this.position);
    for(let i = 0; i < this.ogFiles.length; i++){
      let textPosition = this.ogFiles[i].name.search(this.text);
      var temp = this.ogFiles[i].name;
      if (textPosition != -1 && textPosition < this.ogFiles[i].name.length){
        temp = this.ogFiles[i].name.slice(0, pos) + this.text + this.ogFiles[i].name.slice(pos+1, this.ogFiles[i].name.length-1);
      }
      var modFile = this.ogFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
  }

}
