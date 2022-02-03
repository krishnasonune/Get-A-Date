import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  
  constructor() { }

  private data?: any;

  setData(data?: any) {
    this.data = data;
  }

  getData() {
    let temp = this.data;
    this.clrData();
    return temp;
  }

  clrData() {
    this.data = 'undefined';
  }

}
