package com.texo.library.client.presenter.admin;

import java.util.List;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.listeners.INavigationEventListener;
import com.texo.library.client.listeners.ListenerFactory;
import com.texo.library.client.presenter.contract.IAdminNavigationPresenter;
import com.texo.library.client.views.admin.AdminNavigationView;

public class AdminNavigationPresenter implements IAdminNavigationPresenter {

	private AdminNavigationView view;

	public AdminNavigationPresenter() {
		view = new AdminNavigationView(this);
	}

	@Override
	public void show() {

	}

	@Override
	public Composite getView() {
		return view;
	}

	@Override
	public void onDashboardClicked() {
		List<INavigationEventListener> navigationListeners = ListenerFactory.getInstance().getNavigationListeners();
		for (INavigationEventListener l : navigationListeners) {
			l.onDashboardClicked();
		}
	}

	@Override
	public void onBooksClicked() {
		List<INavigationEventListener> navigationListeners = ListenerFactory.getInstance().getNavigationListeners();
		for (INavigationEventListener l : navigationListeners) {
			l.onBooksClicked();
		}
	}

	@Override
	public void onMembersClicked() {
		List<INavigationEventListener> navigationListeners = ListenerFactory.getInstance().getNavigationListeners();
		for (INavigationEventListener l : navigationListeners) {
			l.onMembersClicked();
		}
	}

}
