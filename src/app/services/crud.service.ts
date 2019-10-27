import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor( private firestore: AngularFirestore) { }

  
  create_NewStudent(record) {
    return this.firestore.collection('contactos').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('contactos').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('contactos/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('contactos/' + record_id).delete();
  }
}


