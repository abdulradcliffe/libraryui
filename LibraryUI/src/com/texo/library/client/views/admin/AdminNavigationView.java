package com.texo.library.client.views.admin;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Label;
import com.texo.library.client.listeners.INavigationEventListener;
import com.texo.library.client.listeners.ListenerFactory;
import com.texo.library.client.presenter.contract.IAdminNavigationPresenter;
import com.texo.library.client.views.contracts.IAdminNavigationView;

import gwt.material.design.client.ui.MaterialToast;

public class AdminNavigationView extends Composite implements IAdminNavigationView {

	interface AdminNavigationViewUiBinder extends UiBinder<HTMLPanel, AdminNavigationView> {

	}

	private static AdminNavigationViewUiBinder binder = GWT.create(AdminNavigationViewUiBinder.class);

	IAdminNavigationPresenter presenter;

	@UiField
	Label dashboardLabel;

	@UiField
	Label booksLabel;
	
	@UiField
	Label membersLabel;

	public AdminNavigationView(IAdminNavigationPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));

		dashboardLabel.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				presenter.onDashboardClicked();
			}
		});
		booksLabel.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				presenter.onBooksClicked();
			}
		});
		membersLabel.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				presenter.onMembersClicked();
			}
		});
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
