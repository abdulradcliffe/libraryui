package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.contract.IAdminMembersPresenter;
import com.texo.library.client.views.admin.AdminMembersView;

public class AdminMembersPresenter implements IAdminMembersPresenter {

	private AdminMembersView view;

	public AdminMembersPresenter() {
		view = new AdminMembersView(this);
	}

	@Override
	public void show() {

	}

	@Override
	public Composite getView() {
		return view;
	}

}
