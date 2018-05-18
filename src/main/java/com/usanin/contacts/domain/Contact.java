package com.usanin.contacts.domain;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CONTACT")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = {"id"})
@Builder
public class Contact
{
  @Id
  @Column(name = "CONTACT_ID")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "NAME", nullable = false)
  private String name;

  @Column(name = "PHONE", nullable = false)
  private String phone;

  @Column(name = "TYPE", nullable = false)
  private String group;

  @Column(name = "PICTURE", nullable = false)
  private String picture;
}
