package com.texo.library.client.presenter.contract;

public interface IAddMembersPresenter extends IPresenter {

	void onSaveButtonClick(String fullName, String email, String password, String selectedItemText);

	void onCancelButtonClick();
}
