package com.texo.library.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.PasswordTextBox;
import com.google.gwt.user.client.ui.TextBox;
import com.texo.library.client.presenter.contract.ILoginPresenter;

import gwt.material.design.client.ui.MaterialToast;

public class LoginView extends Composite {

	interface LoginViewUiBinder extends UiBinder<HTMLPanel, LoginView> {

	}

	private static LoginViewUiBinder binder = GWT.create(LoginViewUiBinder.class);

	@UiField
	Button loginButton;

	@UiField
	TextBox usernameTextBox;

	@UiField
	PasswordTextBox passwordTextBox;

	private ILoginPresenter presenter;

	public LoginView(ILoginPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
		loginButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				onLoginButtonClicked(event);
			}
		});
	}

	protected void onLoginButtonClicked(ClickEvent event) {
		String username = usernameTextBox.getText();
		if (username == null || username.trim().equals("")) {
			MaterialToast.fireToast("Username can not be empty");
//			usernameTextBox.setErrorText();
			return;
		}
		String password = passwordTextBox.getText();
		if (password == null || password.trim().equals("")) {
			MaterialToast.fireToast("Password can not be empty");
			return;
		}
		presenter.onLoginButtonClicked(username, password);

	}

}
