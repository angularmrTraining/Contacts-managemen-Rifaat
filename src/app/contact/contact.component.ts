import { Component, OnInit } from '@angular/core';
import{ContactService} from './contact.service';
import  {Contact}from './contact';
import {clone} from 'lodash';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts:Contact[];
  contactForm:boolean=false;
  isNewContact:boolean;
  newContact:any={};
  editContactForm:boolean=false;
  editedContact:any={};
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts=function(){
    this.contacts=this.contactService.getContactsFromData();
  }

  showEditContactForm(contact:Contact){
    if(!contact){
      this.contactForm=false;
      return;
    }
    this.editContactForm=true;
    this.editedContact=clone(contact);


  }
  showAddContactForm(){

    // resets form if edited contact
    if(this.contacts.length){
      this.newContact={};
    }
    this.contactForm=true;
    this.isNewContact=true;

  }
  saveContact=function(contact:Contact){
    if(this.isNewContact){
      //add a new contact
      this.contactService.addContact(contact);
    }
    this.contactForm=false;
  }
  updateContact(){
    this.contactService.updateContact(this.editedContact);
    this.editContactForm=false;
    this.editedContact={};
  }

  removeContact(contact:Contact){
    this.contactService.deleteContact(contact);
  }
  cancelEdits(){
    this.editedContact={};
    this.editContactForm=false;
  }

  cancelNewContact(){
    this.newContact={};
    this.contactForm=false;
  }
}
