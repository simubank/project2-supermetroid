package com.levelupquest.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.levelupquest.entities.Customer;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value="api")
public class HomeController {


	@GetMapping(value="/home")
	public Customer home() {
		Customer customer = new Customer();
		customer.setName("Krishan");
		customer.setId(1);
		return customer;
	}
	


}
