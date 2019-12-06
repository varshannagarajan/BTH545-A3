import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meta-time',
  templateUrl: './meta-time.component.html',
  styles: []
})
export class MetaTimeComponent implements OnInit {
  modFiles: CustomFile[];
  beforeOrAfter: boolean;
  filename: boolean;
  ext: boolean;

  constructor(private m: FileService) { }

  ngOnInit() {
    this.modFiles = [];
    this.beforeOrAfter = true;
  }
  onSubmit(f: NgForm) {
    for (let i = 0; i < this.m.modifiedFiles.length; i++) {
      let temp = String(this.m.modifiedFiles[i].name);
      const varshanchoice = this.m.modifiedFiles[i].date;
      const time = varshanchoice.split('T');
      const updatedTime = time[1].split(':');

      if (this.beforeOrAfter) {
        temp = updatedTime[0] + '_' + updatedTime[1] + '_' + updatedTime[2] + '_' + this.m.modifiedFiles[i].name;
      } else {
        temp = this.m.modifiedFiles[i].name + '_' + updatedTime[0] + '_' + updatedTime[1] + '_' + updatedTime[2];
      }

      let modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    this.ngOnInit();
    console.log(this.m.modifiedFiles);
  }
}
