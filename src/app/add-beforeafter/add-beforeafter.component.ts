import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CustomFile } from '../file';
import { FileService } from '../file.service';

@Component({
  selector: 'app-add-beforeafter',
  templateUrl: './add-beforeafter.component.html',
  styles: []
})
export class AddBeforeafterComponent implements OnInit {
  
  ogFiles: CustomFile[];

  constructor(
    private route: ActivatedRoute,
    private m: FileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ogFiles = this.m.originalFiles;
  }

  OnSubmit(){

  }

}
