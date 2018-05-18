package com.usanin.contacts.service;

import com.usanin.contacts.domain.Contact;
import com.usanin.contacts.repository.ContactRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService
{
  private ContactRepository contactRepository;

  public ContactService(ContactRepository contactRepository)
  {
    this.contactRepository = contactRepository;
  }

  public List<Contact> getContactList(){
    return (List<Contact>) contactRepository.findAll();
  }

  public Contact getContact(Long contactId){
    return contactRepository.findOne(contactId);
  }

  public Contact saveContact(Contact contact){
    return contactRepository.save(contact);
  }

  public void deleteContact(Long contactId){
    contactRepository.delete(contactId);
  }
}
