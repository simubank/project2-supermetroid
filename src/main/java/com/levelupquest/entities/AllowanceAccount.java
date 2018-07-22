package com.levelupquest.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

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
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate startDate;
	@JsonDeserialize(using = LocalDateDeserializer.class)
	//new Date().toISOString().substring(0,10);
	private LocalDate endDate;
	private int daysLeft;
	@OneToMany(cascade=CascadeType.ALL)
	private List<Transaction> transactions = new ArrayList<Transaction>();
	
}
