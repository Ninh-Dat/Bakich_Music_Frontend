import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';
import {UsesService} from '../../service/uses.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  formSearch: FormGroup;
  userLogin: User
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private userService: UsesService) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getUserById(this.id);
    this.getUserLogin();

  }
  getUserById(id) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.userLogin = JSON.parse(data);
  }

}
