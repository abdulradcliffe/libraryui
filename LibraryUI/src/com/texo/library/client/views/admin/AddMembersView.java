package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.texo.library.client.presenter.contract.IAddMembersPresenter;
import com.texo.library.client.views.contracts.IAddMembersView;

public class AddMembersView extends Composite implements IAddMembersView {

	interface AddMembersViewUiBinder extends UiBinder<HTMLPanel, AddMembersView> {

	}

	private static AddMembersViewUiBinder binder = GWT.create(AddMembersViewUiBinder.class);

	IAddMembersPresenter presenter;

	public AddMembersView(IAddMembersPresenter presenter) {
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
