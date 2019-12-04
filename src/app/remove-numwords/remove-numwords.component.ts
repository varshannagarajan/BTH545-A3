import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-remove-numwords',
  templateUrl: './remove-numwords.component.html',
  styles: []
})
export class RemoveNumwordsComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  caseSen: boolean;
  stripNums: boolean;


  constructor(
    private m: FileService
  ) { }

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.caseSen = false;
    this.stripNums = false;
  }

  onSubmit(f: NgForm) {
    for(let i = 0; i < this.m.modifiedFiles.length; i++){
      if(this.caseSen){
        this.text = this.text.toLowerCase();
      }
      let textPosition = this.m.modifiedFiles[i].name.indexOf(this.text);
      let temp = String(this.m.modifiedFiles[i].name);
      if(textPosition != -1){
        let replaceRegex = new RegExp(this.text,'g');
        temp = this.m.modifiedFiles[i].name.replace(replaceRegex,'')
        if(this.stripNums){
          temp.replace(/[0-9]/g, '');
        }
      }
      console.log(temp);
      var modFile = this.m.modifiedFiles[i];
      modFile.name = temp;
      this.modFiles.push(modFile);
    }
    this.m.modifiedFiles = this.modFiles;
    console.log(this.m.modifiedFiles);
  }

}
