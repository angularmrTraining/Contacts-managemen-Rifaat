import { Injectable } from '@angular/core';
import  {Contact} from './contact';
import {CONTACT_PERSONS} from './contact-data';
import { findIndex } from 'lodash';
@Injectable()
export class ContactService {
  private upersons=CONTACT_PERSONS;

  getContactsFromData():Contact[]{
    console.log(this.upersons);
    return this.upersons;
  }

  addContact(contact:Contact){
    this.upersons.push(contact);
    console.log(this.upersons);

  }
  updateContact(contact:Contact){
    let index=findIndex(this.upersons,(u:Contact)=>{
      return u.id=== contact.id;
    })
    this.upersons[index]=contact;
  }
  deleteContact(contact:Contact){
    this.upersons.splice(this.upersons.indexOf(contact),1);
    console.log(this.upersons);
  }

  constructor() { }

}
