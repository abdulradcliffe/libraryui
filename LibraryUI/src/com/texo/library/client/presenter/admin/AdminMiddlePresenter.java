package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.listeners.EventType;
import com.texo.library.client.listeners.INavigationEventListener;
import com.texo.library.client.listeners.ListenerFactory;
import com.texo.library.client.presenter.contract.IAdminMiddlePresenter;
import com.texo.library.client.views.admin.AdminMiddleView;

import gwt.material.design.client.ui.MaterialToast;

public class AdminMiddlePresenter implements IAdminMiddlePresenter, INavigationEventListener {

	AdminMiddleView view;

	AdminNavigationPresenter navigationPresenter;
	
	AdminBooksPresenter bookPresenter;
	
	AdminMembersPresenter membersPresenter;

	public AdminMiddlePresenter() {
		view = new AdminMiddleView(this);
		navigationPresenter = new AdminNavigationPresenter();
		bookPresenter = new AdminBooksPresenter();
		membersPresenter = new AdminMembersPresenter();
		ListenerFactory instance = ListenerFactory.getInstance();
		instance.register(EventType.NAVIGATION, this);
	}

	@Override
	public void show() {
		view.addNavigationPanel(navigationPresenter.getView());
	}

	@Override
	public Composite getView() {
		return view;
	}

	@Override
	public void onDashboardClicked() {
		MaterialToast.fireToast("onDashboardCicked");
	}

	@Override
	public void onBooksClicked() {
		view.changeMainView(bookPresenter.getView());
		bookPresenter.show();
		
	}

	@Override
	public void onMembersClicked() {
		view.changeMainView(membersPresenter.getView());
		membersPresenter.show();
	}

	@Override
	public void onPackagesClicked() {
		// TODO Auto-generated method stub

	}

	@Override
	public void onAssigneeClicked() {
		// TODO Auto-generated method stub

	}

}
