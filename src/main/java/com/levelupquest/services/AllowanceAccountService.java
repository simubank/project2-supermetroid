package com.levelupquest.services;

import java.util.Optional;

import com.levelupquest.entities.AllowanceAccount;

public interface AllowanceAccountService {

	AllowanceAccount save(AllowanceAccount account);
	Optional<AllowanceAccount> getAccountByApiId(String id);
	
}
