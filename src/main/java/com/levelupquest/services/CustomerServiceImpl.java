package com.levelupquest.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.levelupquest.entities.Customer;
import com.levelupquest.repositories.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public Customer save(Customer customer) {
		
		return this.customerRepository.save(customer);
	}


	@Override
	public Customer update(Customer customer) {
		return this.customerRepository.save(customer);
	}

	@Override
	public Optional<Customer> getCustomerByApiId(String apiId) {
		return this.customerRepository.findByApiId(apiId);
	}
	
	
}
