import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

categories;
id= this.route.snapshot.paramMap.get('id')
  constructor(private categoryService: CategoryService,
              private  route: ActivatedRoute) { }

  ngOnInit() {
  this.getcategoryById(this.id)
  }

  getcategoryById(id){
this.categoryService.getById(id).subscribe(category =>{
this.categories = category
})
  }
}
