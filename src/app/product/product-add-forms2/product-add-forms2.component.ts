import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms2Component implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService) { }
  productAddForm: FormGroup
  product = new Product()
  categories: Category[]
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      imageUrl: ["", Validators.required],
      price: ["", Validators.required],
      categoryId: ["", Validators.required],

    })
  }
  ngOnInit(): void {
    this.createProductAddForm()
    this.categoryService.getCategories().subscribe(data => { this.categories = data })
  }
  add() {
    console.log(this.productAddForm.value)
    // if (this.productAddForm.valid) {
     
    // }
    this.product = Object.assign({}, this.productAddForm.value)
      this.productService.addProduct(this.product).subscribe(data => {
        this.alertifyService.success(data.name + " başarı ile eklendi")
      })
  }
}
