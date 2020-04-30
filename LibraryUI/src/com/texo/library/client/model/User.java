package com.texo.library.client.model;

public class User {

	private Integer id;
	private String name;
	private String email;

	public User() {

	}

	public User(UserJSObject jsObject) {
		this.id = jsObject.getId();
		this.name = jsObject.getName();
		this.email = jsObject.getEmail();
	}

	public Integer getId() {
		return this.id;
	}

	public String getName() {
		return this.name;
	}

	public String getEmail() {
		return this.email;
	}

}
