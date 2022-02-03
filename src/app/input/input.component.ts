import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from '../service/serv.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(private route: Router, private ser: ServService) { }
  submit(form: NgForm) {
    this.ser.setData(form.value.name);
    this.route.navigate(['/result']);
    
    
    
  }
  ngOnInit(): void {
  }

}
