package com.levelupquest.repositories;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.levelupquest.entities.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

	Optional<Customer> findByApiId(String id);
}
