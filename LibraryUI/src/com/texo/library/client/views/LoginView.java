package com.texo.library.client.views;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.ILoginPresenter;

import gwt.material.design.client.ui.MaterialButton;
import gwt.material.design.client.ui.MaterialTextBox;

public class LoginView extends Composite {

	interface LoginViewUiBinder extends UiBinder<HTMLPanel, LoginView> {

	}

	private static LoginViewUiBinder binder = GWT.create(LoginViewUiBinder.class);

	@UiField
	MaterialButton loginButton;

	@UiField
	MaterialTextBox usernameTextBox;

	@UiField
	MaterialTextBox passwordTextBox;

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
			usernameTextBox.setErrorText("Username can not be empty");
			return;
		}
		String password = passwordTextBox.getText();
		if (password == null || password.trim().equals("")) {
			passwordTextBox.setErrorText("Password can not be empty");
			return;
		}
		presenter.onLoginButtonClicked(username, password);

	}

}
