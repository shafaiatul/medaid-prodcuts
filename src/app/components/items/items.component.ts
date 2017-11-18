import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Item } from '../../models/Item';
import { MzToastService } from 'ng2-materialize';

// import item service
import { ItemService } from './../../services/item.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsComponent implements OnInit   {
  items: Item[];
  term;

  constructor(private itemService: ItemService, private toastService: MzToastService) { }
  getAllData() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }
  ngOnInit() {
    this.getAllData();
  }
  // Show  update  Toast message
  showUpdateToast(item) {
    this.toastService.show(`${item.ProductName} info has updated 😃`, 4000, 'green');
  }
  // Show delete Toast message
  showDeleteToast(item) {
    this.toastService.show(`${item.ProductName} has been Removed 😭`, 4000, 'green');
  }

  handleRemove(event) {
    this.itemService.deleteProduct(event);
    this.showDeleteToast(event);
  }
  handleEdit(event) {
    this.itemService.updateProduct(event);
    this.showUpdateToast(event);
  }
  handleRefreshData(event) {
    this.getAllData();
  }
}
