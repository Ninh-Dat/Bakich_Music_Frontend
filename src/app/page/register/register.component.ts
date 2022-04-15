import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  constructor(private fb: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.formRegister = this.fb.group({
      name: [''],
      email: [''],
      password:[''],
      password_confirmation: [''],
      phone: ['']
    })
  }
  submit(){
    const data = this.formRegister.value;
    this.registerService.register(data).subscribe( res =>{
      const userRegister = res.user;
      localStorage.setItem('userRegister', JSON.stringify(userRegister));
      this.router.navigate(['login']);
    })
  }

}
