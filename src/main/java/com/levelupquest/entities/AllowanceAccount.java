package com.levelupquest.entities;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
	@ElementCollection
	private List<String> transactions;
	
}
