package com.liferay.external.portlet.action;

import com.liferay.external.portlet.configuration.ExternalPortletInstanceConfiguration;
import com.liferay.external.portlet.constants.ExternalPortletKeys;
import com.liferay.portal.configuration.metatype.bnd.util.ConfigurableUtil;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.json.JSONFactoryUtil;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.portlet.bridges.mvc.MVCRenderCommand;
import com.liferay.portal.kernel.util.PortalUtil;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Modified;

import javax.portlet.PortletException;
import javax.portlet.RenderRequest;
import javax.portlet.RenderResponse;
import java.util.HashMap;
import java.util.Map;

@Component(
	immediate = true,
	property = {
		"javax.portlet.name=" + ExternalPortletKeys.SHARED_APPLICATION,
		"mvc.command.name=/", "mvc.command.name=/react/route/view"
	},
	service = MVCRenderCommand.class
)
public class ExternalPortletViewCommand implements MVCRenderCommand {

	@Override
	public String render(
		RenderRequest renderRequest, RenderResponse renderResponse)
		throws PortletException {

		renderRequest.setAttribute("_config", renderRequest.getPreferences().getMap());
		try {
			User user = PortalUtil.getUser(PortalUtil.getHttpServletRequest(renderRequest));

			Map<String, String> liferayContext = new HashMap<>();

			if (user != null) {
				liferayContext.put("userFirstName", user.getFirstName());
				liferayContext.put("userLastName", user.getLastName());
				liferayContext.put("userFullName", user.getFullName());
				liferayContext.put("userNameScreen", user.getScreenName());
				liferayContext.put("userEmail", user.getEmailAddress());
				liferayContext.put("userId", String.valueOf(user.getUserId()));
				liferayContext.put("userCompanyId", String.valueOf(user.getCompanyId()));
			}

			String liferayContextJson = JSONFactoryUtil.serialize(liferayContext);

			renderRequest.setAttribute(
					"liferayContext", liferayContextJson);
		} catch (PortalException e) {
			_log.error(e);
		}

		return "/view.jsp";
	}

	@Activate
	@Modified
	protected void activate(Map<Object, Object> properties) {
		_configuration = ConfigurableUtil.createConfigurable(
			ExternalPortletInstanceConfiguration.class, properties);
	}
	private static final Log _log = LogFactoryUtil.getLog(ExternalPortletViewCommand.class);

	private volatile ExternalPortletInstanceConfiguration _configuration;


}