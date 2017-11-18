import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './../../models/item';

// import item service
import { ItemService } from './../../services/item.service';
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailComponent implements OnInit {
  all_labels;


  @Input()
  detail: Item;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  @Output()
  refresh: EventEmitter<any> = new EventEmitter();

  constructor(private itemService: ItemService) { }

  public modalOptions: Materialize.ModalOptions = {
    dismissible: false, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '100%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: (modal, trigger) => { // Callback for Modal open. Modal and trigger parameters available.
      this.all_labels = Array.from(modal[0].querySelectorAll('label'));
      // Add active class from each labels
      this.all_labels.forEach((eachLabel) => {
        eachLabel.className = 'active';
      });
    },
  };


  ngOnInit() {
  }


  // Updating Item
  onProductNameChange(value: string) {
    console.log('value: ', value);
    this.detail.ProductName = value;
  }
  onBarcodeChange(value: string) {
    console.log('value: ', value);
    this.detail.Barcode = value;
  }
  onPriceChange(value: number) {
    console.log('value: ', value);
    this.detail.Price = value;
  }
  handleEdit() {
    this.edit.emit(this.detail);
  }
  // Deleting Item
  onRemove() {
    this.remove.emit(this.detail);
  }
  // Refresh Data
  onRefresh() {
    this.refresh.emit();
  }
}
