package com.liferay.external.portlet;


import com.liferay.external.portlet.constants.ExternalPortletKeys;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCPortlet;

import javax.portlet.Portlet;

import org.osgi.service.component.annotations.Component;

/**
 * @author douglas
 */
@Component(
	configurationPid = ExternalPortletKeys.CONFIGURATION,
	immediate = true,
	property = {
		"com.liferay.portlet.display-category=category.sample",
		"com.liferay.portlet.instanceable=true",
		"javax.portlet.init-param.template-path=/",
		"javax.portlet.init-param.mvc-command-names-default-views=/react/route/view",
		"javax.portlet.name=" + ExternalPortletKeys.SHARED_APPLICATION,
		"javax.portlet.resource-bundle=content.Language",
		"javax.portlet.security-role-ref=power-user,user",
		"com.liferay.portlet.single-page-application=false"
	},
	service = Portlet.class
)
public class ExternalPortlet extends MVCPortlet {


}