package com.texo.library.client.listeners;

public enum EventType {

	NAVIGATION("NAVIGATION"), ADD_USER_CLICK("ADD_USER_CLICK");

	String value;

	EventType(String s) {
		value = s;
	}

	@Override
	public String toString() {
		return value;
	}
}
