package com.levelupquest.entities;

import java.io.Serializable;

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
public class Track implements Serializable{

	@Id
	@GeneratedValue
	private int id;
	
	private long groceryAmount;
	private long restaurantAmount;
	
	private long otherAmount;
}
