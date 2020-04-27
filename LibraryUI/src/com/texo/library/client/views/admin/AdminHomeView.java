package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAdminHomePresenter;
import com.texo.library.client.views.contracts.IAdminView;

public class AdminHomeView extends Composite implements IAdminView {

	interface AdminHomeViewUiBinder extends UiBinder<HTMLPanel, AdminHomeView> {

	}

	private static AdminHomeViewUiBinder binder = GWT.create(AdminHomeViewUiBinder.class);

	private IAdminHomePresenter presenter;

	@UiField
	HTMLPanel headerPanel;

	@UiField
	HTMLPanel middlePanel;

	@UiField
	HTMLPanel footerPanel;

	public AdminHomeView(IAdminHomePresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
	}

	@Override
	public void show() {

	}

	public void addHeader(Composite headerView) {
		headerPanel.add(headerView);
	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

	public void addMiddleContent(Composite view) {
		middlePanel.add(view);
	}

	public void addFooter(Composite view) {
		footerPanel.add(view);

	}

}
