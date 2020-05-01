package com.texo.library.client.views.admin;

import com.google.gwt.core.client.GWT;
import com.google.gwt.dom.client.Style;
import com.google.gwt.dom.client.Style.BorderStyle;
import com.google.gwt.dom.client.Style.Display;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.event.dom.client.ChangeHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.texo.library.client.presenter.contract.IAddMembersPresenter;
import com.texo.library.client.views.contracts.IAddMembersView;

public class AddMembersView extends Composite implements IAddMembersView {

	private static final String RED = "#ff0000";

	private static final String BLACK = "#000000";

	private static final String STUDENT = "Student";

	private static final String ADMINISTRATOR = "Administrator";

	private static final String PLEASE_SELECT = "-- Please Select --";

	interface AddMembersViewUiBinder extends UiBinder<HTMLPanel, AddMembersView> {

	}

	private static AddMembersViewUiBinder binder = GWT.create(AddMembersViewUiBinder.class);

	IAddMembersPresenter presenter;

	@UiField
	Button saveButton;

	@UiField
	Button cancelButton;

	@UiField
	TextBox emailTextBox;

	@UiField
	TextBox fullNameTextBox;

	@UiField
	TextBox passwordTextBox;

	@UiField
	ListBox roleDropDown;

	@UiField
	Image loaderImage;

	public AddMembersView(IAddMembersPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
		saveButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				onSaveButtonClick();
			}
		});

		cancelButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				onCancelButtonClick();
			}
		});

		roleDropDown.addItem(PLEASE_SELECT);
		roleDropDown.addItem(STUDENT);
		roleDropDown.addItem(ADMINISTRATOR);

	}

	protected void onCancelButtonClick() {
		presenter.onCancelButtonClick();
	}

	protected void onSaveButtonClick() {
		boolean proceed = true;
		String fullName = fullNameTextBox.getText();
		if (fullName == null || fullName.isEmpty()) {
			proceed = false;
			Element element2 = fullNameTextBox.getElement();
			Style style = element2.getStyle();
			style.setBorderColor(RED);
			style.setBorderWidth(2, Unit.PX);
//			element2.setAttribute("placeholder", "Please Enter Name");
		} else {
			Style style = fullNameTextBox.getElement().getStyle();
			style.setBorderColor(BLACK);
			style.setBorderWidth(1, Unit.PX);
		}

		String password = passwordTextBox.getText();
		if (password == null || password.isEmpty()) {
			proceed = false;
			Element element2 = passwordTextBox.getElement();
			Style style = element2.getStyle();
			style.setBorderColor(RED);
			style.setBorderWidth(2, Unit.PX);
		} else {
			Style style = passwordTextBox.getElement().getStyle();
			style.setBorderColor(BLACK);
			style.setBorderWidth(1, Unit.PX);
		}

		String email = emailTextBox.getText();
		if (email == null || email.isEmpty()) {
			proceed = false;
			Element element2 = emailTextBox.getElement();
			Style style = element2.getStyle();
			style.setBorderColor(RED);
			style.setBorderWidth(2, Unit.PX);
		} else {
			Style style = emailTextBox.getElement().getStyle();
			style.setBorderColor(BLACK);
			style.setBorderWidth(1, Unit.PX);
		}

		String selectedItemText = roleDropDown.getSelectedItemText();
		if (PLEASE_SELECT.equals(selectedItemText)) {
			proceed = false;
			roleDropDown.getElement().getStyle().setBorderColor(RED);
			roleDropDown.getElement().getStyle().setBorderWidth(2, Unit.PX);
		} else {
			Style style = roleDropDown.getElement().getStyle();
			style.setBorderColor(BLACK);
			style.setBorderWidth(1, Unit.PX);
		}

		if (proceed) {
			presenter.onSaveButtonClick(fullName, email, password, selectedItemText);
		}
	}

	public void showLoaer(boolean show) {
		if (show) {
			loaderImage.getElement().getStyle().setDisplay(Display.BLOCK);
			cancelButton.getElement().getStyle().setDisplay(Display.NONE);
			saveButton.getElement().getStyle().setDisplay(Display.NONE);
		} else {
			loaderImage.getElement().getStyle().setDisplay(Display.NONE);
			cancelButton.getElement().getStyle().setDisplay(Display.BLOCK);
			saveButton.getElement().getStyle().setDisplay(Display.BLOCK);
		}
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
