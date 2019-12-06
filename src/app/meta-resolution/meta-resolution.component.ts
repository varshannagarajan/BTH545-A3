import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meta-resolution',
  templateUrl: './meta-resolution.component.html',
  styles: []
})
export class MetaResolutionComponent implements OnInit {
  modFiles: CustomFile[];
  beforeOrAfter: boolean;
  filename: boolean;
  ext: boolean;

  constructor( private m: FileService) { }

  ngOnInit() {
    this.modFiles = [];
    this.beforeOrAfter = true;
  }

  onSubmit(f: NgForm) {
    for (let i = 0; i < this.m.modifiedFiles.length; i++) {
      let temp = String(this.m.modifiedFiles[i].name);
      const varshanchoice = this.m.modifiedFiles[i]['x-resolution'];
      const varshansmells = this.m.modifiedFiles[i]['y-resolution'];

      if (this.beforeOrAfter) {
        temp = varshanchoice + 'x' + varshansmells + '_' + this.m.modifiedFiles[i].name;
      } else {
        temp = this.m.modifiedFiles[i].name + '_' + varshanchoice + 'x' + varshansmells;
      }

      let modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
