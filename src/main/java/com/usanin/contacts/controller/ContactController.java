package com.usanin.contacts.controller;

import com.usanin.contacts.domain.Contact;
import com.usanin.contacts.service.ContactService;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/contacts")
public class ContactController
{
  private ContactService contactService;

  public ContactController(ContactService contactService)
  {
    this.contactService = contactService;
  }

  @GetMapping
  public List<Contact> getContactList() {
    return contactService.getContactList();
  }

  @GetMapping("/{id}")
  public Contact getContact(@PathVariable("id") Long id) {
    return contactService.getContact(id);
  }

  @PostMapping
  public Contact createContact(@RequestBody Contact resource) {
    return contactService.saveContact(resource);
  }

  @PutMapping("/{id}")
  public Contact updateContact(@RequestBody Contact resource) {
    return contactService.saveContact(resource);
  }

  @DeleteMapping("/{id}")
  public void deleteContact(@PathVariable("id") Long id) {
    contactService.deleteContact(id);
  }

}
