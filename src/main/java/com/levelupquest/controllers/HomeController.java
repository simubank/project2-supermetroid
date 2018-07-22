package com.levelupquest.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.levelupquest.entities.Customer;
import com.levelupquest.entities.Notification;
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
				? this.customerService.getCustomerByApiId(id).get()
				: null;
	}

	@PostMapping(value = "/customer")
	public Customer save(@RequestBody Customer customer) {
		return this.customerService.save(customer);
	}

	@PutMapping(value = "/customer")
	public Customer update(@RequestBody Customer customer) {

		return this.customerService.update(customer);
	}

	@GetMapping(value = "/test")
	public Customer test() {
		String id = "63363738-f374-4490-83d4-be9bfba401f1_6c8434d3-9d00-45d9-83d6-5c87cc97cdd8";
		String account="63363738-f374-4490-83d4-be9bfba401f1_60c1c98a-120d-48fe-875e-44df4525ca90";
		Customer c = this.customerService.getCustomerByApiId(id).get();
		c.setAllowanceSavingsAccountId(account);
		this.customerService.save(c);
		return c;
	}

	@GetMapping(value = "/notifications/{id}")
	public List<Notification> getNotifications(@PathVariable String id) {
		return this.customerService.getCustomerByApiId(id).get().getNotifications();
	}

	@PostMapping(value = "/notifications/{id}")
	public List<Notification> postNotificatiton(@RequestBody String notificationText, @PathVariable String id) {
		Notification notification = new Notification(notificationText);
		Customer customer = this.customerService.getCustomerByApiId(id).get();
		customer.getNotifications().add(notification);
		this.customerService.save(customer);
		return customer.getNotifications();
	}
	
	@GetMapping(value = "/balance/{id}")
	public double getBalance(@PathVariable String id) {
		return this.customerService.getCustomerByApiId(id).get().getAllowanceAccount().getBalance();
	}
}
