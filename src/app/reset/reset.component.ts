import { Component, OnInit } from '@angular/core';
import { FileService } from 'app/file.service';
import _ from 'lodash';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styles: []
})
export class ResetComponent implements OnInit {

  constructor(private fs: FileService) { }

  ngOnInit() {
  }

  resetFileNames() {
    this.fs.modifiedFiles = _.cloneDeep(this.fs.originalFiles);
    console.log(this.fs.modifiedFiles);
  }

}
