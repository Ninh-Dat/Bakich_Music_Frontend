import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UsesService} from '../../service/uses.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  ids: number;
  updateForm: FormGroup;
  userLogin: User;
  users;
  id = this.route.snapshot.paramMap.get('id');
  constructor(private userService: UsesService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.ids = +paramMap.get('ids');

      this.getById(this.id);
    });
  }

  ngOnInit() {
    this.getUserLogin();
    this.getUserById(this.id);
  }

  getUserById(id) {
    this.userService.getById(id).subscribe(user => {
      this.users = user;
    });
  }
  getById(id) {
    return this.userService.getById(id).subscribe(user => {
        this.updateForm = new FormGroup({
          name: new FormControl(user.name),
          email: new FormControl(user.email),
          address: new FormControl(user.address),
          phone: new FormControl(user.phone),
        });
      }
    );

  }

  submit(id) {
    return this.userService.updateUser(id, this.updateForm.value).subscribe(() => {
    this.router.navigate(['/users/'+id+'/detail']);
    });
  }

  getUserLogin(){
    let data = localStorage.getItem('userLogin');
    this.userLogin = JSON.parse(data);
  }
}
