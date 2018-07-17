package com.levelupquest.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue
	private int cId;
	private String id; 
	@OneToOne(cascade = CascadeType.ALL)
	private AllowanceAccount allowanceAccount;
	private String allowanceSavingsAccount;
	
}
