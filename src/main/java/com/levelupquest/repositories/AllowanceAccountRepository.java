package com.levelupquest.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.levelupquest.entities.AllowanceAccount;

@Repository
public interface AllowanceAccountRepository extends CrudRepository<AllowanceAccount, Integer> {

}
