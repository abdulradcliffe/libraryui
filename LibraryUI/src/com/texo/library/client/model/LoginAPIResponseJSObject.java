package com.texo.library.client.model;

import com.google.gwt.core.client.JavaScriptObject;

public class LoginAPIResponseJSObject extends JavaScriptObject {

	protected LoginAPIResponseJSObject() {

	}

	public final native Boolean getStatus() /*-{
		return this.status
	}-*/;

	public final native UserJSObject getUser() /*-{
		return this.user;
	}-*/;
}
