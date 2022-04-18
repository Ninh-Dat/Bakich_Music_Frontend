import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import {UsesService} from '../../service/uses.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  formSearch: FormGroup;
  userLogin: User
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private  userService: UsesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
    this.getUserLogin();
    this.getUserById(this.id)
  }
  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.userLogin = JSON.parse(data);
  }
  getUserById(id) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
  getUserLogout(){
    this.router.navigate(['login'])
  }

}
