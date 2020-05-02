package com.texo.library.client.views.admin;

import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.texo.library.client.model.User;
import com.texo.library.client.presenter.contract.IAdminMembersPresenter;
import com.texo.library.client.views.contracts.IAdminMembersView;

public class AdminMembersView extends Composite implements IAdminMembersView {

	interface AdminMembersViewUiBinder extends UiBinder<HTMLPanel, AdminMembersView> {

	}

	private static AdminMembersViewUiBinder binder = GWT.create(AdminMembersViewUiBinder.class);

	IAdminMembersPresenter presenter;

	@UiField
	HTMLPanel membersTable;

	@UiField
	Button addUserButton;

	@UiField
	Button searchUserButton;

	@UiField
	TextBox searchUserTextBox;

	private CellTable<User> cellTableOfUser;

	public AdminMembersView(IAdminMembersPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
		FlexTable flexTable = createFlexTable();
		cellTableOfUser = new CellTable<User>();
		// The policy that determines how keyboard selection will work. Keyboard
		// selection is enabled.
		cellTableOfUser.setKeyboardSelectionPolicy(KeyboardSelectionPolicy.ENABLED);

		// Add a text columns to show the details.
		TextColumn<User> columnFirstLine = new TextColumn<User>() {
			@Override
			public String getValue(User object) {
				return "" + object.getId();
			}
		};
		cellTableOfUser.addColumn(columnFirstLine, "StudentID");

		TextColumn<User> columnSecondLine = new TextColumn<User>() {
			@Override
			public String getValue(User object) {
				return object.getName();
			}
		};
		cellTableOfUser.addColumn(columnSecondLine, "Student Name");

		TextColumn<User> emaiColumn = new TextColumn<User>() {
			@Override
			public String getValue(User object) {
				return object.getEmail();
			}
		};
		cellTableOfUser.addColumn(emaiColumn, "Email");

		TextColumn<User> roleColumn = new TextColumn<User>() {
			@Override
			public String getValue(User object) {
				return object.getRole();
			}
		};
		cellTableOfUser.addColumn(roleColumn, "Role");

		final SingleSelectionModel<User> selectionModel = new SingleSelectionModel<User>();
		cellTableOfUser.setSelectionModel(selectionModel);
		selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {

			public void onSelectionChange(SelectionChangeEvent event) {

				User selectedUser = selectionModel.getSelectedObject();
				if (selectedUser != null) {
					Window.alert("Selected: Student: " + selectedUser.getName());
				}
			}
		});

//		VerticalPanel vp = new VerticalPanel();
//	    vp.setBorderWidth(1);
//	    vp.add(flexTable);
//	    vp.add(cellTableOfUser);
		membersTable.add(flexTable);
		membersTable.add(cellTableOfUser);

		addUserButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				AdminMembersView.this.presenter.onAddUserButtonClick();
			}
		});

		searchUserButton.addClickHandler(new ClickHandler() {

			@Override
			public void onClick(ClickEvent event) {
				onSearchUserButton();
			}
		});
	}

	protected void onSearchUserButton() {
		String searchString = searchUserTextBox.getText();
		if (searchString == null || searchString.trim().equals("")) {
			return;
		}
		presenter.onSearchUserButton(searchString);
	}

	public void setMembersData(List<User> users) {
		cellTableOfUser.setRowCount(users.size());
		cellTableOfUser.setRowData(users);
	}

	private FlexTable createFlexTable() {
		FlexTable flexTable = new FlexTable();
//		    flexTable.setBorderWidth(1);
//		    flexTable.getFlexCellFormatter().setColSpan(1, 0, 3);
		return flexTable;
	}

	@Override
	public void show() {
		refresh();

	}

	private void refresh() {
		searchUserTextBox.setText("");
	}

	@Override
	public void close() {
		// TODO Auto-generated method stub

	}

}
