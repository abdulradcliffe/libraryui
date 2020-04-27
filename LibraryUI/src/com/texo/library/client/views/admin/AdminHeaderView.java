package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.texo.library.client.presenter.contract.IAdminHeaderPresenter;
import com.texo.library.client.views.contracts.IAdminHeaderView;

public class AdminHeaderView extends Composite implements IAdminHeaderView {

	interface AdminHeaderViewUiBinder extends UiBinder<HTMLPanel, AdminHeaderView> {

	}

	private static AdminHeaderViewUiBinder binder = GWT.create(AdminHeaderViewUiBinder.class);

	IAdminHeaderPresenter presenter;

	@UiField
	Button logoutButton;

	public AdminHeaderView(IAdminHeaderPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
		logoutButton.addClickHandler(new ClickHandler() {
			
			@Override
			public void onClick(ClickEvent event) {
				onLogoutButtonClicked();
			}
		});
	}

	protected void onLogoutButtonClicked() {
		presenter.onLogoutButtonClicked();
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
