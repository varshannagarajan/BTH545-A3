import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-replacenum',
  templateUrl: './modify-replacenum.component.html',
  styles: []
})
export class ModifyReplacenumComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  replaceText: string;
  right: boolean;
  left: boolean;

  constructor(private m: FileService) {}

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    }

    onSubmit(f: NgForm){
      for(let i = 0; i < this.m.modifiedFiles.length; i++){
          let temp = this.m.modifiedFiles[i].name;

        if(this.m.modifiedFiles[i].name.includes('[0-9]')) {

          temp = this.m.modifiedFiles[i].name.replace(/(\d+)/, this.text);
          console.log(temp);
        }

        var modFile = this.m.modifiedFiles[i];
        modFile.name = temp;
        this.modFiles.push(modFile);
      }
      this.m.modifiedFiles = this.modFiles;
      this.ngOnInit();
      console.log(this.m.modifiedFiles);
    }
}
