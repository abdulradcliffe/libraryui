package com.texo.library.client.presenter.admin;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.contract.IAdminBooksPresenter;
import com.texo.library.client.views.admin.AdminBooksView;

public class AdminBooksPresenter implements IAdminBooksPresenter {

	private AdminBooksView view;

	public AdminBooksPresenter() {
		view = new AdminBooksView(this);
	}

	@Override
	public void show() {

	}

	@Override
	public Composite getView() {
		return view;
	}

}
