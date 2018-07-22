package com.levelupquest.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class AllowanceAccount {

	@Id
	@GeneratedValue
	private int id;
	private long allowance;
	private long balance;
	private String timePeriod;
	private LocalDate startDate;
	private LocalDate endDate;
	@OneToMany(cascade=CascadeType.ALL)
	private List<Transaction> transactions = new ArrayList<Transaction>();
	
}
