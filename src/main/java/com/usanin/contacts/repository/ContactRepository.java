package com.usanin.contacts.repository;

import com.usanin.contacts.domain.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, Long>
{
}
