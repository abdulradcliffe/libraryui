package com.texo.library.client.presenter.admin;

import java.util.List;
import java.util.logging.Logger;

import com.google.gwt.http.client.Request;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.Response;
import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.api.APICaller;
import com.texo.library.client.listeners.INavigationEventListener;
import com.texo.library.client.listeners.ListenerFactory;
import com.texo.library.client.presenter.contract.IAddMembersPresenter;
import com.texo.library.client.views.admin.AddMembersView;

public class AddMembersPresenter implements IAddMembersPresenter {

	private AddMembersView view;

	private Logger logger = Logger.getLogger("AddMembersPresenter");

	public AddMembersPresenter() {
		view = new AddMembersView(this);
	}

	@Override
	public void show() {
		refresh();
	}

	public void refresh() {

	}

	@Override
	public Composite getView() {
		return view;
	}

	@Override
	public void onCancelButtonClick() {
		List<INavigationEventListener> navigationListeners = ListenerFactory.getInstance().getNavigationListeners();
		for (int i = 0; i < navigationListeners.size(); i++) {
			INavigationEventListener l = navigationListeners.get(i);
			l.onMembersClicked();
		}
	}

	@Override
	public void onSaveButtonClick(String fullName, String email, String password, String role) {
		String url = APICaller.baseUrl + "/user/add?name=" + fullName + "&email=" + email + "&password=" + password
				+ "&role=" + role;
		APICaller.call(url, new RequestCallback() {

			@Override
			public void onResponseReceived(Request request, Response response) {
				view.showLoaer(false);
				if (200 == response.getStatusCode()) {
					String text = response.getText();
					if ("Added successfully".equals(text)) {
						view.setInfoMessage("User Added Successfully");
					} else {
						view.setErrorMessage("ERROR: " + text);
					}
				}
			}

			@Override
			public void onError(Request request, Throwable exception) {
				view.showLoaer(false);
				view.setErrorMessage("ERROR: " + exception.getCause());
			}
		});
		view.showLoaer(true);
	}

}
