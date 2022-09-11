import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  adminForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // BekaFix2 => EVENT აქედანაც წავშალე. event.preventDefault იც არ არის საჭირო
  onSubmit() {
    // BekaAdd1 თუ username არის admin და პაროლი არის asdASD123 მარტო მაშინ გადაამისამართოს "admin/home"
    // სხვა შემთხვევაში დაწეროს incorrect credentials
    this.router.navigate(['admin', 'home']);
    console.log('submitted');
  }
}
