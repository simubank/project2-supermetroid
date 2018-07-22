package com.levelupquest.entities;

import java.io.Serializable;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor 
@Entity
public class Transaction implements Serializable {

	@Id
	@GeneratedValue
	private int id;
	private String accountId;
	private ArrayList<String> categoryTags;
	private long currencyAmount;
	private String customerId;
	private String description;
	private String locationCity;
	private String locationCountry;
	private double locationLatitude;
	private double locationLongitude;
	private String locationPostalCode;
	private String locationRegion;
	private String locationStreet;
	private String merchantCategoryCode;
	private String merchantId;
	private String merchantName;
	private long originalCurencyAmount;
	private String originalCurrency;
	private String originationDate;
	private long postBalance;
	private String postDate;
	private String source;
	private String type;
	private boolean success;
	private String message;

}
