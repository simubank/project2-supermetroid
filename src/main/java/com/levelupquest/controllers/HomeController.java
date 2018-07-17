package com.levelupquest.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.levelupquest.entities.Customer;
import com.levelupquest.services.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api")
public class HomeController {

	@Autowired
	private CustomerService customerService;

	@GetMapping(value = "/home")
	public Customer home() {
		Customer customer = new Customer();
		return customer;
	}

	@GetMapping(value = "/customer/{id}")
	public Customer getCustomerById(@PathVariable String id) {
		return this.customerService.getCustomerByApiId(id).isPresent() 
				? this.customerService.getCustomerByApiId(id).get() : null;
	}

	@PostMapping(value = "/customer")
	public Customer save(@RequestBody Customer customer) {
		return this.customerService.save(customer);
	}


	@PutMapping(value = "/customer")
	public Customer update(@RequestBody Customer customer) {

		return this.customerService.update(customer);
	}

	@GetMapping(value="/test")
	public Customer test() {
		Customer c = new Customer();
		
		return c;
	}
}
