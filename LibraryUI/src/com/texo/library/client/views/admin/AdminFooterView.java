package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAdminFooterPresenter;
import com.texo.library.client.views.contracts.IAdminFooterView;

public class AdminFooterView extends Composite implements IAdminFooterView {

	interface AdminFooterViewUiBinder extends UiBinder<HTMLPanel, AdminFooterView> {

	}

	private static AdminFooterViewUiBinder binder = GWT.create(AdminFooterViewUiBinder.class);

	IAdminFooterPresenter presenter;

	public AdminFooterView(IAdminFooterPresenter presenter) {
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
