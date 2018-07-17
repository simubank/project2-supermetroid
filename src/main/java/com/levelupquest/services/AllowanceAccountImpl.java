package com.levelupquest.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.levelupquest.entities.AllowanceAccount;
import com.levelupquest.repositories.AllowanceAccountRepository;

@Service
public class AllowanceAccountImpl implements AllowanceAccountService{


	@Autowired
	private AllowanceAccountRepository allowanceAccountRepository;

	@Override
	public AllowanceAccount save(AllowanceAccount account) {
		return this.allowanceAccountRepository.save(account);
	}

	@Override
	public Optional<AllowanceAccount> getAccountById(int id) {
		return this.allowanceAccountRepository.findById(id);
	}
	
	
	
	
	
}
