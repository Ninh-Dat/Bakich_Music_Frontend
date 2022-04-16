import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  formSearch: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formSearch = this.fb.group({
      search: [''],
    });
  }

}
