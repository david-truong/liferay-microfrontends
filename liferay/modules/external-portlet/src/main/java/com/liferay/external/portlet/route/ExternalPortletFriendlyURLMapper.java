package com.liferay.external.portlet.route;

import com.liferay.external.portlet.constants.ExternalPortletKeys;
import com.liferay.portal.kernel.portlet.DefaultFriendlyURLMapper;
import com.liferay.portal.kernel.portlet.FriendlyURLMapper;
import org.osgi.service.component.annotations.Component;

@Component(
	property = {
		"com.liferay.portlet.friendly-url-routes=META-INF/resources/friendly-url-routes/routes.xml",
		"javax.portlet.name=" + ExternalPortletKeys.SHARED_APPLICATION
	},
	service = FriendlyURLMapper.class
)
public class ExternalPortletFriendlyURLMapper extends DefaultFriendlyURLMapper {

	@Override
	public String getMapping() {
		return _MAPPING;
	}

	private static final String _MAPPING = "react";

}