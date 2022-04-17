import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formSearch: FormGroup;
  userLogin: User

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getUserLogin();
  }
  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.userLogin = JSON.parse(data);
  }
}
