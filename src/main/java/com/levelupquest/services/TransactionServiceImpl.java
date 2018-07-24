package com.levelupquest.services;

import java.time.LocalDate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.levelupquest.entities.Customer;
import com.levelupquest.entities.Notification;
import com.levelupquest.entities.Transaction;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private CustomerService customerService;

	private Logger LOGGER = LoggerFactory.getLogger(TransactionServiceImpl.class);

	@Override
	public Customer makePayment(Customer customer, Transaction transaction) {
		
			
		
		if (customer.getAllowanceAccount().getBalance() >= transaction.getCurrencyAmount()) {
			
			
			
				
			transaction.setSuccess(true);
			transaction.setMessage("Transaction Successfull.");
			// deduct money, change balance
			customer.getAllowanceAccount()
					.setBalance(calculateBalance(customer.getAllowanceAccount().getBalance(), transaction));

			if (transaction.getCategoryTags().contains("GROCERY")) {
				customer.setRewardPoints(calculateRewardPoints(customer.getRewardPoints(),transaction));
				customer.getTrack().setGroceryAmount(
						customer.getTrack().getRestaurantAmount() + transaction.getCurrencyAmount());
				transaction.setMessage("Good job! Keep buying more groceries!");
			}else if (transaction.getCategoryTags().contains("RESTAURANT")) {
				customer.getTrack().setRestaurantAmount(
						customer.getTrack().getRestaurantAmount() + transaction.getCurrencyAmount());
				
			}else {
				customer.getTrack().setOtherAmount(transaction.getCurrencyAmount());
			}
			// add notification
			customer.getNotifications().add(generateNotification(transaction));
			// check if its the end of the period
			if (customer.getAllowanceAccount().getEndDate() == LocalDate.now()) {
				// this is the last date, show summary, give notification
				// send an email
			}
			
			//check if he has spent half of his money on eating out
			if(customer.getTrack().getRestaurantAmount() >= customer.getAllowanceAccount().getAllowance() / 2) {
				transaction.setMessage("You've spent more than half of your "
						+ "money on eating out. Please try to purchase more groceries now.");
			}
			//set balance in transaction
			transaction.setPostBalance(customer.getAllowanceAccount().getBalance());
			
			//if they have days left and no money
			
			
			
		} else {
			transaction.setSuccess(false);
			transaction.setMessage("Sorry! you don't have enough funds to process this transaction");
		}
		customer.getAllowanceAccount().getTransactions().add(transaction);
		this.customerService.save(customer);
		return customer;
		}
	

	private Notification generateNotification(Transaction transaction) {
		Notification notification = new Notification();
		notification
				.setText("You just spent $" + transaction.getCurrencyAmount() + " at " + transaction.getMerchantName());
		return notification;
	}

	private long calculateBalance(long currentBalance, Transaction transaction) {

		return currentBalance - transaction.getCurrencyAmount();
	}

	private int calculateRewardPoints(int rewardPoints, Transaction transaction) {
		// double the amount of money spent

		return rewardPoints + (int) transaction.getCurrencyAmount() * 2;
	}
	
	@Override
	public Customer restaurantVisit(Customer customer, Transaction transaction) {
		if(transaction.getMerchantName().equals("Visit")) {
			if(customer.getAllowanceAccount().getBalance() <= 10) {
				LOGGER.error("BAL");
			transaction.setMessage("People usually spend $23 here. You only have $"
					+ customer.getAllowanceAccount().getBalance());
			
			transaction.setSuccess(false);
			
			}
			customer.getAllowanceAccount().getTransactions().add(transaction);
			return customer;
		
		}else {
			return null;
		}
	}

}
