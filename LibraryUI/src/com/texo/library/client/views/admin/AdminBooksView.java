package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAdminBooksPresenter;
import com.texo.library.client.views.contracts.IAdminBooksView;

public class AdminBooksView extends Composite implements IAdminBooksView {

	interface AdminBooksViewUiBinder extends UiBinder<HTMLPanel, AdminBooksView> {

	}

	private static AdminBooksViewUiBinder binder = GWT.create(AdminBooksViewUiBinder.class);

	IAdminBooksPresenter presenter;

	public AdminBooksView(IAdminBooksPresenter presenter) {
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
