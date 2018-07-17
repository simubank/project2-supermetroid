package com.levelupquest.services;

import java.util.Optional;

import com.levelupquest.entities.Customer;

public interface CustomerService{

	Customer save(Customer customer);
	Customer update(Customer customer);
	Optional<Customer> getCustomerByApiId(String id);
}
