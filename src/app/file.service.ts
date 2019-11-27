import { Injectable } from '@angular/core';
import mockFiles from '../assets/MOCK_DATA.json';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  originalFiles: File[];
  modifiedFiles: File[];
  constructor() {
    this.originalFiles = [...mockFiles];
    this.modifiedFiles = [];
  }
}
