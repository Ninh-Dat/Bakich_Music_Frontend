import {Component, OnInit} from '@angular/core';
import {UsesService} from '../../service/uses.service';
import {ActivatedRoute, Route} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  id = this.route.snapshot.paramMap.get('id');

  constructor(private userService: UsesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUserLogin()
  }

  getUserById(id) {
    this.userService.getById(id).subscribe(user => {
      this.user = user;
    });
  }

  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.user = JSON.parse(data);
  }
}
