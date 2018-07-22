package com.levelupquest.services;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.levelupquest.entities.Customer;
import com.levelupquest.entities.Notification;
import com.levelupquest.entities.Transaction;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private CustomerService customerService;
	@Override
	public Customer makePayment(Customer customer, Transaction transaction) {
		if (customer.getAllowanceAccount().getBalance() >= transaction.getCurrencyAmount()) {
			transaction.setSuccess(true);
			// deduct money, change balance
			customer.getAllowanceAccount()
					.setBalance(calculateBalance(customer.getAllowanceAccount().getBalance(), transaction));

			if (transaction.getCategoryTags().contains("GROCERY")) {
				customer.setRewardPoints(calculateRewardPoints(transaction));
				customer.getTrack().setGroceryAmount(transaction.getCurrencyAmount());
				transaction.setMessage("Good job! Keep buying more groceries!");
			}else if (transaction.getCategoryTags().contains("RESTAURANT")) {
				customer.getTrack().setRestaurantAmount(transaction.getCurrencyAmount());
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
			if(customer.getTrack().getRestaurantAmount() <= customer.getAllowanceAccount().getAllowance() / 2) {
				transaction.setMessage("You've spent more than half of your "
						+ "money on eating out. Please focus on buying groceries now");
			}
			
			

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
		notification.setText("You just spent $"+ transaction.getCurrencyAmount()+" at "+ transaction.getMerchantName());
		return notification;
	}

	private long calculateBalance(long currentBalance, Transaction transaction) {

		return currentBalance - transaction.getCurrencyAmount();
	}

	private int calculateRewardPoints(Transaction transaction) {
		// double the amaount of money spent
		int rewardPoints = (int) transaction.getCurrencyAmount() * 2;
		return rewardPoints;
	}

}
