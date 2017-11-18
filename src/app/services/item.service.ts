import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './../models/item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ItemService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemDoc: AngularFirestoreDocument<Item>;
  items: Observable<Item[]>;
  constructor(public afs: AngularFirestore) {}

  getItems() {
    this.itemsCollection = this.afs.collection<Item>('items', ref => ref.orderBy('ProductName', 'asc'));
    // this.items = this.itemsCollection.valueChanges();
    this.items = this.itemsCollection.snapshotChanges().map(actions  => {
      return actions .map(a => {
        const data = a.payload.doc.data() as Item;
        data.Id = a.payload.doc.id;
        return data;
      });
    });
    return this.items;
  }
  addProduct(item: Item) {
    this.itemsCollection.add(item);
  }
  deleteProduct(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.Id}`);
    this.itemDoc.delete();
  }
  updateProduct(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.Id}`);
    this.itemDoc.update(item);
  }

}
