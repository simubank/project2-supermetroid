package com.levelupquest.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Customer {
	
	@Id
	@GeneratedValue
	private int id;
	private String apiId; 
	@OneToOne(cascade = CascadeType.ALL)
	private AllowanceAccount allowanceAccount = new AllowanceAccount();
	private String allowanceSavingsAccountId;
	@OneToMany(cascade=CascadeType.ALL)
	private List<Notification> notifications;
	
	private int rewardPoints;
	
	@OneToOne(cascade = CascadeType.ALL)
	private Track track = new Track();
	
}
