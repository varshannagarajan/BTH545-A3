import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from '../file.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-selectmove',
  templateUrl: './modify-selectmove.component.html',
  styles: []
})
export class ModifySelectmoveComponent implements OnInit {

  modFiles: CustomFile[];
  text: string;
  replaceText: string;
  before: boolean;
  after: boolean;
  moveBefore: boolean;
  moveAfter: boolean;
  position: boolean;
  setPosition: number;
  lastPosition:number;
  position3: boolean;
  positionMove: number;

  constructor(private m: FileService) { 
  
  }

  ngOnInit() {
    this.modFiles = [];
    this.text = '';
    this.replaceText = '';
    this.after = false;
    this.before = false;
    this.moveBefore = false;
    this.moveAfter = false;
    }

    onSubmit(f: NgForm){
    
      for(let i = 0; i < this.m.modifiedFiles.length; i++){
        let textPosition = this.m.modifiedFiles[i].name.indexOf(this.text);
        let textPosition2 = this.m.modifiedFiles[i].name.indexOf(this.replaceText);
        let temp = this.m.modifiedFiles[i].name;
        let temp2 = this.m.modifiedFiles[i].name;

        if(this.m.modifiedFiles[i].name.includes(this.text) && this.text != null)
        {
           if(this.before){
            temp = this.m.modifiedFiles[i].name.slice(0, textPosition); 

          }

          if(this.after){
            temp = this.text + this.m.modifiedFiles[i].name.slice(textPosition+this.text.length, (this.m.modifiedFiles[i].name.length - 1));
          }

          if(this.moveBefore){
            temp = this.text + temp + this.replaceText;//sapien, ie, ie sap n
            console.log("Temp2 " + temp2);
          }

          if(this.moveAfter){
            temp2 = this.replaceText + this.m.modifiedFiles[i].name.slice(textPosition2 + this.replaceText.length, (this.m.modifiedFiles[i].name.length - 1));
           // temp = temp2 + temp;
            
          }
        }

        if(this.setPosition != null){
        
          temp = temp.slice(this.setPosition - 1, this.lastPosition);
          console.log("SetPosition " + temp) ;
      }

        if(this.positionMove != null){
          
          temp2 = this.m.modifiedFiles[i].name.slice(this.lastPosition, this.positionMove) + temp + this.m.modifiedFiles[i].name.slice(this.positionMove, this.m.modifiedFiles[i].name.length);
          temp = temp2;
          console.log("MovePosition " + temp2);
        }
        
        console.log(this.positionMove + "" + this.setPosition);

        var modFile = this.m.modifiedFiles[i];
        modFile.name = temp;
        this.modFiles.push(modFile);

      }
      this.m.modifiedFiles = this.modFiles;
      console.log(this.m.modifiedFiles); 
    }
}
