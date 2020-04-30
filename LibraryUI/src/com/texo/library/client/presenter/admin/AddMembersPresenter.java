package com.texo.library.client.presenter.admin;

import java.util.logging.Logger;

import com.google.gwt.user.client.ui.Composite;
import com.texo.library.client.presenter.contract.IAddMembersPresenter;
import com.texo.library.client.views.admin.AddMembersView;

public class AddMembersPresenter implements IAddMembersPresenter {

	private AddMembersView view;

	private Logger logger = Logger.getLogger("AddMembersPresenter");

	public AddMembersPresenter() {
		view = new AddMembersView(this);
	}

	@Override
	public void show() {
		refresh();
	}

	public void refresh() {

	}

	@Override
	public Composite getView() {
		return view;
	}

}
