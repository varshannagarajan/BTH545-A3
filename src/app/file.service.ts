import { Injectable } from '@angular/core';
import { CustomFile } from './file';
import _ from 'lodash';
import mockFiles from '../assets/MOCK_DATA.json';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  originalFiles: CustomFile[];
  modifiedFiles: CustomFile[];

  constructor() {
    this.originalFiles = [...mockFiles];
    this.modifiedFiles = _.cloneDeep(this.originalFiles);
  }
}
