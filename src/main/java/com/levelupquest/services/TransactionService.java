package com.levelupquest.services;

import com.levelupquest.entities.Customer;
import com.levelupquest.entities.Transaction;

public interface TransactionService {

	Customer makePayment(Customer customer, Transaction transaction);
}
