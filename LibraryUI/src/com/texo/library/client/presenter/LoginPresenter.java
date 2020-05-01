package com.texo.library.client.presenter;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.Response;
import com.google.gwt.http.client.URL;
import com.google.gwt.user.client.ui.RootPanel;
import com.texo.library.client.presenter.admin.AdminHomePresenter;
import com.texo.library.client.presenter.contract.ILoginPresenter;
import com.texo.library.client.views.LoginView;

import gwt.material.design.client.ui.MaterialLoader;
import gwt.material.design.client.ui.MaterialToast;

public class LoginPresenter implements ILoginPresenter {

	private Logger logger = Logger.getLogger("LoginPresenter");

//	private final LibraryGWTServiceAsync gwtService = GWT.create(LibraryGWTService.class);

	private LoginView view;

	public LoginPresenter() {
		view = new LoginView(this);
	}

	public void show() {
		RootPanel mainContent = RootPanel.get();
		mainContent.clear();
		mainContent.add(view);
	}

	@Override
	public void onLoginButtonClicked(String name, String password) {
		logger.log(Level.INFO, "this is  message: " + name);
		String urlString = "http://ec2-13-235-82-198.ap-south-1.compute.amazonaws.com:8888/library/user/login?email="
				+ name + "&password=" + password;
		RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, URL.encode(urlString));
		RequestCallback callback = new LoginCallback();
		try {
			builder.sendRequest(null, callback);
			view.showLoader(true);
		} catch (RequestException e) {
			logger.log(Level.SEVERE, "RequestException: " + e);
			e.printStackTrace();
		}
//		MaterialLoader.loading(true);
	}

	private class LoginCallback implements RequestCallback {

		private static final String LOGGED_IN_SUCCESSFULLY = "logged in successfully";

		@Override
		public void onResponseReceived(Request request, Response response) {
			Integer statusCode = response.getStatusCode();
			logger.log(Level.INFO, "onResponseReceived: statusCode=" + statusCode);
			if (200 == statusCode) {
				view.showLoader(false);
				String responseText = response.getText();
				logger.log(Level.INFO, "responseText=" + responseText);
				if (LOGGED_IN_SUCCESSFULLY.equalsIgnoreCase(responseText.trim())) {
					AdminHomePresenter p = new AdminHomePresenter();
					p.show();
				} else {
					MaterialToast.fireToast("Invalid Credentials. Please try again");
				}
			}
		}

		@Override
		public void onError(Request request, Throwable exception) {
			logger.log(Level.SEVERE, "onError: cause=" + exception.getCause());
			view.showLoader(false);
		}

	}
}
