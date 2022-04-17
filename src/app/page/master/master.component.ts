import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserDetailComponent} from '../../user/user-detail/user-detail.component';
import {User} from '../../models/user';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
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
