import { Component, OnInit } from '@angular/core';
import { CustomFile } from '../file';
import { FileService } from 'app/file.service';

@Component({
  selector: 'app-display-modified',
  templateUrl: './display-modified.component.html',
  styleUrls: []
})
export class DisplayModifiedComponent implements OnInit {
  files: CustomFile[];
  constructor(private fs: FileService) { }

  ngOnInit() {
    this.files = this.fs.modifiedFiles;
  }

}
