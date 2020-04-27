package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
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
	


}
