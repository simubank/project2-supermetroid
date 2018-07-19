package com.levelupquest.entities;

import java.time.LocalDate;

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
public class Notification {

	@Id
	@GeneratedValue
	private int id;
	
	private String text;
	
	private LocalDate date = LocalDate.now();
	
}
