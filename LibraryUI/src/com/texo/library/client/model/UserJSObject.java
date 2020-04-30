package com.texo.library.client.model;

import com.google.gwt.core.client.JavaScriptObject;

public class UserJSObject extends JavaScriptObject {

	protected UserJSObject() {

	}

	public final native Integer getId() /*-{
		return this.id;
	}-*/;

	public final native String getName() /*-{
		return this.name;
	}-*/;

	public final native String getEmail() /*-{
		return this.email;
	}-*/;

}
