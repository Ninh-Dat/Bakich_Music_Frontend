import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 formSearch: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
  }

}
