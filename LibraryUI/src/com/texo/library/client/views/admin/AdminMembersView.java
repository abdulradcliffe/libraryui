package com.texo.library.client.views.admin;

import java.util.ArrayList;
import java.util.List;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.cellview.client.CellTable;
import com.google.gwt.user.cellview.client.HasKeyboardSelectionPolicy.KeyboardSelectionPolicy;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.FlexTable;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.VerticalPanel;
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

	public AdminMembersView(IAdminMembersPresenter presenter) {
		this.presenter = presenter;
		initWidget(binder.createAndBindUi(this));
		FlexTable flexTable = createFlexTable();
		CellTable<User> cellTableOfUser = new CellTable<User>();
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
		cellTableOfUser.addColumn(emaiColumn, "Emai");

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

		List<User> Useres = new ArrayList<User>() {
			{
				add(new User(1, "Ahmed", "ahmed@hotmail.com"));
				add(new User(2, "Muhammad", "randomxp@yu.com"));
				add(new User(3, "KingBadhshah", "Y_thop@mydom.com"));
				add(new User(4, "RockGold", "x_hack_rp@phoria.com"));
				add(new User(5, "Gold-E", "ww_w_rock@gmail.com"));
			}
		};

		cellTableOfUser.setRowCount(Useres.size(), true);
		cellTableOfUser.setRowData(0, Useres);
		
		VerticalPanel vp = new VerticalPanel();
	    vp.setBorderWidth(1);
	    vp.add(flexTable);
	    vp.add(cellTableOfUser);
	    membersTable.add(vp);
	}
	
	 private FlexTable createFlexTable() {
		    FlexTable flexTable = new FlexTable();
		    flexTable.setBorderWidth(1);
		    flexTable.getFlexCellFormatter().setColSpan(1, 0, 3);
		    return flexTable;
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
