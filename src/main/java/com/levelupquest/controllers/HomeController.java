package com.levelupquest.controllers;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

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

import com.levelupquest.entities.AllowanceAccount;
import com.levelupquest.entities.Customer;
import com.levelupquest.entities.Notification;
import com.levelupquest.entities.Track;
import com.levelupquest.entities.Transaction;
import com.levelupquest.services.AllowanceAccountService;
import com.levelupquest.services.CustomerService;
import com.levelupquest.services.TransactionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "api")
public class HomeController {

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private TransactionService transactionService;
	
	@Autowired
	private AllowanceAccountService accountService;


	@GetMapping(value = "/customer/{id}")
	public Customer getCustomerById(@PathVariable String id) {
		 Customer customer = this.customerService.getCustomerByApiId(id).isPresent()
				? this.customerService.getCustomerByApiId(id).get() : null;
				
			if(customer != null ) customer.getAllowanceAccount()
			.setDaysLeft(
					(int)ChronoUnit.DAYS.between(LocalDate.now(),
							customer.getAllowanceAccount().getEndDate()));	
				return customer;
				
	}

	@PostMapping(value = "/customer")
	public Customer save(@RequestBody Customer customer) {
		return this.customerService.save(customer);
	}

	@PutMapping(value = "/customer")
	public Customer update(@RequestBody Customer customer) {

		return this.customerService.update(customer);
	}


	@GetMapping(value = "/notifications/{id}")
	public List<Notification> getNotifications(@PathVariable String id) {
		return this.customerService.getCustomerByApiId(id).get().getNotifications();
	}

	@PostMapping(value = "/notifications/{id}")
	public List<Notification> postNotificatiton(@RequestBody String notificationText, @PathVariable String id) {
		Notification notification = new Notification();
		notification.setText(notificationText);
		Customer customer = this.customerService.getCustomerByApiId(id).get();
		customer.getNotifications().add(notification);
		this.customerService.save(customer);
		return customer.getNotifications();
	}
	
	@GetMapping(value = "/balance/{id}")
	public double getBalance(@PathVariable String id) {
		return this.customerService.getCustomerByApiId(id).get().getAllowanceAccount().getBalance();
	}
	
	@PostMapping(value="/transaction/{id}") 
	public Customer postTransaction(@PathVariable String id, @RequestBody Transaction transaction) {
		Customer customer = this.customerService.getCustomerByApiId(id).get();
		if(customer.getTrack() == null) customer.setTrack(new Track());
		Customer checkRestaurant = this.transactionService.restaurantVisit(customer, transaction);
	
		if( checkRestaurant == null) {
			return this.transactionService.makePayment(customer, transaction);
		}else {
			return checkRestaurant;
		}
	}
	
	@DeleteMapping(value="/notifications/{id}")
	public List<Notification> delNotifications(@PathVariable String id) {
		Customer customer = this.customerService.getCustomerByApiId(id).get();
		customer.setNotifications(new ArrayList<Notification>());
		this.customerService.save(customer);
		return customer.getNotifications();
	}
	
	
	
	@PostMapping(value="/account/{id}")
	public Customer postAllowanceAccount(@PathVariable String id, @RequestBody AllowanceAccount account) {
		Customer customer = this.customerService.getCustomerByApiId(id).get();
		this.accountService.delete(customer.getAllowanceAccount());
		customer.setAllowanceAccount(account);
		if(customer != null ) customer.getAllowanceAccount()
		.setDaysLeft(
				(int)ChronoUnit.DAYS.between(LocalDate.now(),
						customer.getAllowanceAccount().getEndDate()));
		customer.getTrack().setGroceryAmount(0);
		customer.getTrack().setRestaurantAmount(0);
		customer.getTrack().setOtherAmount(0);
		this.customerService.save(customer);
		return customer;
	}
	
}
