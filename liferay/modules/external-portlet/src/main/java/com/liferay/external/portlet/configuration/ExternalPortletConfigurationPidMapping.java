package com.liferay.external.portlet.configuration;

import com.liferay.external.portlet.constants.ExternalPortletKeys;
import com.liferay.portal.kernel.settings.definition.ConfigurationPidMapping;
import org.osgi.service.component.annotations.Component;

@Component
public class ExternalPortletConfigurationPidMapping implements ConfigurationPidMapping {
	@Override
	public Class<?> getConfigurationBeanClass() {
		return ExternalPortletInstanceConfiguration.class;
	}

	@Override
	public String getConfigurationPid() {
		return ExternalPortletKeys.SHARED_APPLICATION;
	}
}