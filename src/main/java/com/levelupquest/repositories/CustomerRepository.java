package com.levelupquest.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.levelupquest.entities.Customer;

@Repository
public interface CustomerRepository extends  MongoRepository<Customer, Integer> {

}
