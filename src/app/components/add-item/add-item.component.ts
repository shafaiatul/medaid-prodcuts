import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { ItemService } from './../../services/item.service';
import { Item } from './../../models/item';

import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  // Add Product variables
  addProductEventTarget; all_labels; all_inputs;

  item: Item = {
    Barcode: '',
    Price: null,
    ProductName: ''
  };
  constructor(private itemService: ItemService, private toastService: MzToastService) { }

  ngOnInit() {
  }
  // Show Add Toast message
  showAddToast(item) {
    this.toastService.show(`${item.ProductName} has been Added 😃`, 4000, 'green');
  }

  // Handle Adding new Item(product) to the Items
  onSubmit() {
    if (this.item.ProductName !== '' && this.item.Price !== null ) {
      this.itemService.addProduct(this.item);
      // call toast method
      this.showAddToast(this.item);
      // Empty the form fields on submit
      this.item.ProductName = '';
      this.item.Barcode = '';
      this.item.Price = null;

      this.addProductEventTarget = event.target;
      this.all_labels = Array.from(this.addProductEventTarget.querySelectorAll('label'));
      this.all_inputs = Array.from(this.addProductEventTarget.querySelectorAll('input'));
      // Remove active class from each labels
      this.all_labels.forEach((eachLabel) => {
        eachLabel.classList.remove('active');
      });
      // Remove active class from each inputs
      this.all_inputs.forEach((eachInput) => {
        eachInput.classList.remove('valid');
      });

    }
  }

}
