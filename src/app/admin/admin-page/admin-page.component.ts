import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  adminForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(event: any){
    event.preventDefault();
    console.log('submitted');
  }


 
}

