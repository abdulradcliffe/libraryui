package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAdminMiddlePresenter;
import com.texo.library.client.views.contracts.IAdminMiddleView;

public class AdminMiddleView extends Composite implements IAdminMiddleView {

	interface AdminMiddleViewUiBinder extends UiBinder<HTMLPanel, AdminMiddleView> {

	}

	private static AdminMiddleViewUiBinder binder = GWT.create(AdminMiddleViewUiBinder.class);

	IAdminMiddlePresenter presenter;

	@UiField
	HTMLPanel adminNavigationPanel;

	@UiField
	HTMLPanel adminMainView;

	public AdminMiddleView(IAdminMiddlePresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
	}

	@Override
	public void show() {
		// TODO Auto-generated method stub

	}

	public void addNavigationPanel(Composite view) {
		adminNavigationPanel.add(view);
	}
	
	public void changeMainView(Composite view) {
		adminMainView.clear();
		adminMainView.add(view);
	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

}
