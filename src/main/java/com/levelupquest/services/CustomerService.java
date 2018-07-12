package com.levelupquest.services;

import java.util.Optional;

import com.levelupquest.entities.Customer;

public interface CustomerService{

	Customer save(Customer customer);
	void deleteById(int id);
	Customer update(Customer customer);
	Optional<Customer> getCustomerById(int id);
}
