package com.levelupquest.services;

import java.util.Optional;

import com.levelupquest.entities.AllowanceAccount;

public interface AllowanceAccountService {

	AllowanceAccount save(AllowanceAccount account);
	Optional<AllowanceAccount> getAccountById(int id);
	void delete(AllowanceAccount account);
	
}
