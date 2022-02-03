import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay, interval } from 'rxjs';

import { ServService } from '../service/serv.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private ser: ServService) { }
  x?: string; 
  v: any;
  I: any;
  ini?: string;
  showSpinner: boolean = true;
  
  
  ngOnInit(): void {
    
    setTimeout(() => {
      this.showSpinner = false;
      this.x = 'Good Luck, ' + this.ser.getData();
      this.v = Math.floor(Math.random() * 100) + ' %';

      this.ini = 'Initial Of your crush';
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";


      var lenString = 1;
      var randomstring = '';


      for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
        this.I =  randomstring;
      }
    }, 4000)
  }

}
