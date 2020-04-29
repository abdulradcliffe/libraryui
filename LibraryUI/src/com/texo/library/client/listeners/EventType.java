package com.texo.library.client.listeners;

public enum EventType {

	NAVIGATION("NAVIGATION");

	String value;

	EventType(String s) {
		value = s;
	}

	@Override
	public String toString() {
		return value;
	}
}
