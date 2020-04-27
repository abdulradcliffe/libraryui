package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAdminNavigationPresenter;
import com.texo.library.client.views.contracts.IAdminNavigationView;

public class AdminNavigationView extends Composite implements IAdminNavigationView {

	interface AdminNavigationViewUiBinder extends UiBinder<HTMLPanel, AdminNavigationView> {

	}

	private static AdminNavigationViewUiBinder binder = GWT.create(AdminNavigationViewUiBinder.class);

	IAdminNavigationPresenter presenter;

	public AdminNavigationView(IAdminNavigationPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
	}

	@Override
	public void show() {
		// TODO Auto-generated method stub

	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

}
