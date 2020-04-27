package com.texo.library.client.presenter.admin;

import java.util.logging.Logger;

import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
import com.texo.library.client.presenter.contract.IAdminFooterPresenter;
import com.texo.library.client.presenter.contract.IAdminHeaderPresenter;
import com.texo.library.client.presenter.contract.IAdminHomePresenter;
import com.texo.library.client.presenter.contract.IAdminMiddlePresenter;
import com.texo.library.client.views.admin.AdminHomeView;

public class AdminHomePresenter implements IAdminHomePresenter {

	private Logger logger = Logger.getLogger("HomePresenter");

	private AdminHomeView view;

	private IAdminHeaderPresenter adminHeaderPresenter;

	private IAdminMiddlePresenter adminMiddlePresenter;

	private IAdminFooterPresenter adminFooterPresenter;

	public AdminHomePresenter() {
		adminHeaderPresenter = new AdminHeaderPresenter();
		adminMiddlePresenter = new AdminMiddlePresenter();
		adminFooterPresenter = new AdminFooterPresenter();
		view = new AdminHomeView(this);
	}

	public void show() {
		RootPanel mainContent = RootPanel.get();
		mainContent.clear();
		mainContent.add(view);
		Composite headerView = adminHeaderPresenter.getView();
		view.addHeader(headerView);
		view.addMiddleContent(adminMiddlePresenter.getView());
		adminMiddlePresenter.show();
		view.addFooter(adminFooterPresenter.getView());
	}
}
