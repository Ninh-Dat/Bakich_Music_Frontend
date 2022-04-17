import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {LoginService} from '../../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {min} from 'rxjs/operators';
import {UsesService} from '../../service/uses.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private userService: UsesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    });
    this.getUserById(this.id);
  }

  get f() {
    return this.loginForm.controls;
  }


  submit() {
    const data = this.loginForm.value;
    console.log(data);
    this.loginService.login(data).subscribe(res => {
      const userLogin = res.user;
      localStorage.setItem('userLogin', JSON.stringify(userLogin));
      this.router.navigate(['master']);
    });
  }

  getUserById(id) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
}
