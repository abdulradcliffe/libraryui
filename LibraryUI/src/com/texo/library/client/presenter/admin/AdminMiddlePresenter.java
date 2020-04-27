package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.contract.IAdminMiddlePresenter;
import com.texo.library.client.views.admin.AdminMiddleView;

public class AdminMiddlePresenter implements IAdminMiddlePresenter {

	AdminMiddleView view;
	
	AdminNavigationPresenter navigationPresenter;

	public AdminMiddlePresenter() {
		view = new AdminMiddleView(this);
		navigationPresenter = new AdminNavigationPresenter();
	}

	@Override
	public void show() {
		view.addNavigationPanel(navigationPresenter.getView());
	}

	@Override
	public Composite getView() {
		return view;
	}

}
