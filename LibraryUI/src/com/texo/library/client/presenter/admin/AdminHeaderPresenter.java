package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.LoginPresenter;
import com.texo.library.client.presenter.contract.IAdminHeaderPresenter;
import com.texo.library.client.views.admin.AdminHeaderView;

public class AdminHeaderPresenter implements IAdminHeaderPresenter {

	AdminHeaderView view;

	public AdminHeaderPresenter() {
		view = new AdminHeaderView(this);
	}

	@Override
	public void show() {

	}

	@Override
	public Composite getView() {
		return view;
	}

	@Override
	public void onLogoutButtonClicked() {
		new LoginPresenter().show();
	}
	
	

}
