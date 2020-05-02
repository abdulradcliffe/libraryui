package com.texo.library.client.presenter.admin;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.JsonUtils;
import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.api.APICaller;
import com.texo.library.client.listeners.IAddUserButtonClickEventListener;
import com.texo.library.client.listeners.ListenerFactory;
import com.texo.library.client.model.User;
import com.texo.library.client.model.UserJSObject;
import com.texo.library.client.presenter.contract.IAdminMembersPresenter;
import com.texo.library.client.views.admin.AdminMembersView;

import gwt.material.design.client.ui.MaterialLoader;

public class AdminMembersPresenter implements IAdminMembersPresenter {

	private AdminMembersView view;

	private Logger logger = Logger.getLogger("AdminMembersPresenter");

	public AdminMembersPresenter() {
		view = new AdminMembersView(this);
	}

	@Override
	public void show() {
		refresh();
	}

	public void refresh() {
		view.show();
		RequestCallback callback = new GetAllMembersAPICallback();
		String url = APICaller.baseUrl + "/user/getAll";
		MaterialLoader.loading(true);
		APICaller.call(url, callback);
	}

	class GetAllMembersAPICallback implements RequestCallback {

		@Override
		public void onResponseReceived(Request request, Response response) {
			MaterialLoader.loading(false);
			Integer statusCode = response.getStatusCode();
			logger.log(Level.INFO, "onResponseReceived: statusCode=" + statusCode);
			if (200 == statusCode) {
				List<User> users = new ArrayList<User>();
				String responseString = response.getText();
				JsArray<UserJSObject> usersArray = JsonUtils.safeEval(responseString);
				int length = usersArray.length();
				for (int i = 0; i < length; i++) {
					UserJSObject userJSObject = usersArray.get(i);
					User user = new User(userJSObject);
					users.add(user);
				}
				view.setMembersData(users);
			}
		}

		@Override
		public void onError(Request request, Throwable exception) {
			logger.log(Level.INFO, "onError: cause=" + exception.getCause());
			MaterialLoader.loading(false);
		}

	}

	@Override
	public Composite getView() {
		return view;
	}

	@Override
	public void onAddUserButtonClick() {
		List<IAddUserButtonClickEventListener> addUserClickListener = ListenerFactory.getInstance()
				.getAddUserClickListener();
		for (IAddUserButtonClickEventListener l : addUserClickListener) {
			l.onAddUserButtonClicked();
		}
	}

	@Override
	public void onSearchUserButton(String searchString) {
		RequestCallback callback;
		APICaller.call(APICaller.baseUrl + "/user/search?string=" + searchString, new GetAllMembersAPICallback());
	}

}
