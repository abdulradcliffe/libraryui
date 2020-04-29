package com.texo.library.client.listeners;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ListenerFactory {

	private static ListenerFactory factory = new ListenerFactory();

	private HashMap<EventType, List<INavigationEventListener>> map;

	private ListenerFactory() {
		map = new HashMap<EventType, List<INavigationEventListener>>();
	}

	public static ListenerFactory getInstance() {
		return factory;
	}

	public List<INavigationEventListener> getNavigationListeners() {
		return map.get(EventType.NAVIGATION);
	}

	public void register(EventType event, Object listener) {
		switch (event) {
		case NAVIGATION:
			if (listener != null && listener instanceof INavigationEventListener) {
				List<INavigationEventListener> existing = map.get(EventType.NAVIGATION);
				if (existing == null) {
					existing = new ArrayList<INavigationEventListener>();
					map.put(EventType.NAVIGATION, existing);
				}
				existing.add((INavigationEventListener) listener);
			}
			break;

		default:
			break;
		}
	}
}
