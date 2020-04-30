package com.texo.library.client.api;

import java.util.logging.Level;
import java.util.logging.Logger;

import com.google.gwt.http.client.RequestBuilder;
import com.google.gwt.http.client.RequestCallback;
import com.google.gwt.http.client.RequestException;
import com.google.gwt.http.client.URL;

public class APICaller {
	
	private static Logger logger = Logger.getLogger("APICaller");
	
	public static String baseUrl = "http://ec2-13-235-82-198.ap-south-1.compute.amazonaws.com:8888/library";

	public static void call(String url, RequestCallback callback) {
		RequestBuilder builder = new RequestBuilder(RequestBuilder.GET, URL.encode(url));
		try {
			builder.sendRequest(null, callback);
		} catch (RequestException e) {
			logger.log(Level.SEVERE, "RequestException: " + e);
			e.printStackTrace();
		}
	}
}
