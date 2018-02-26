import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {
  }

  ngOnInit() {
    this.register = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signup() {
    if (this.register.invalid) { return; }

    this.registerService.register(this.register.value).subscribe(
      done => console.log(done)
    );
  }

  isValid(control: string): string {
    return this.register.controls[control].invalid && this.register.controls[control].touched ? 'is-invalid' : '';
  }

}
