package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.contract.IAdminFooterPresenter;
import com.texo.library.client.views.admin.AdminFooterView;

public class AdminFooterPresenter implements IAdminFooterPresenter {

	AdminFooterView view;

	public AdminFooterPresenter() {
		view = new AdminFooterView(this);
	}

	@Override
	public void show() {

	}

	@Override
	public Composite getView() {
		return view;
	}

}
