import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserMenuPage } from '../pages/user-menu/user-menu.page';

export interface User {
  Id?: string;
  Date?: string;
  Rol: string;
  Name: string;
  Carnet: string;
  Password: string;
  Balance?: number;
  CardNumber?: string;
  CardBalance?: number;
  Location?: string;
}


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private user: User;

  private users: any;
  private userCollection: any;

  constructor(
    private angularFirestore: AngularFirestore
  ) {
    this.userCollection = this.angularFirestore.collection('users');
    /*
    this.users = this.userCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(id);
          return { id, ...data };
        });
      })
    );
    */
  }

  getUsers() {
    return this.userCollection;
  }

  getUser(id: string): AngularFirestoreDocument<User> {
    return this.userCollection;
    // this.userCollection.valueChanges().subscribe(elem => {
    //  console.log(elem);
    //  if (elem.Carnet === id) {
    //    return elem;
    //  }
    // });
    // return this.userCollection.doc(id);
  }

  validateUser(user: User, data: any) {
    if (data.carnet === user.Carnet) {
      if (data.password === user.Password) {
        return true;
      }
      return false;
    }
    return false;
  }

  addUser(user: User) {
    const m = this.angularFirestore.collection<User>('users').doc(user.Carnet);
    m.set(user);
  }

  updateUser(user: User): Promise<void> {
    return this.userCollection.doc(user.Carnet).update(user);
  }

  deleteUser(id: string): Promise<void> {
    return this.userCollection.doc(id).delete();
  }

  updateBalance(carnet: string, balance: number): Promise<void> {
    return this.userCollection.doc(carnet).update({ Balance: balance });
  }

  updateCardBalance(carnet: string, balance: number): Promise<void> {
    return this.userCollection.doc(carnet).update({ CardBalance: balance });
  }

  updateCarNumber(carnet: string, card: string, date: string): Promise<void> {
    console.log(card + " " + date);
    return this.userCollection.doc(carnet).update({ CardNumber: card, Date: date });
  }

  deleteCard(carnet: string): Promise<void> {
    return this.userCollection.doc(carnet).update({ CardNumber: ''});
  }

}
