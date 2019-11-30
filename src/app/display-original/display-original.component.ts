import { Component, OnInit } from '@angular/core';
import { FileService } from 'app/file.service';
import { CustomFile } from '../file';

@Component({
  selector: 'app-display-original',
  templateUrl: './display-original.component.html',
  styleUrls: []
})
export class DisplayOriginalComponent implements OnInit {
  files: CustomFile[];
  constructor(private fs: FileService) { }

  ngOnInit() {
    this.files = this.fs.originalFiles;
  }

}
