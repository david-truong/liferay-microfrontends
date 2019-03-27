package com.liferay.external.portlet.configuration;


import aQute.bnd.annotation.metatype.Meta;
import com.liferay.external.portlet.constants.ExternalPortletKeys;
import com.liferay.portal.configuration.metatype.annotations.ExtendedObjectClassDefinition;


@ExtendedObjectClassDefinition(
	category = "portlet-instance",
	scope = ExtendedObjectClassDefinition.Scope.PORTLET_INSTANCE
)
@Meta.OCD(
	id = ExternalPortletKeys.CONFIGURATION,
	localization = "content/Language", name = "shared-app-configuration"
)
public interface ExternalPortletInstanceConfiguration {

	@Meta.AD(
		deflt = "", description = "remote-app-bundle-src",
		name = "remote_app_bundle_src", required = false
	)
	public String remoteAppBundleSrc();

	@Meta.AD(
		deflt = "", description = "remote-app-bundle-src",
		name = "remote_app_html_selector", required = false
	)
	public String remoteAppHtmlSelector();

	@Meta.AD(
		deflt = "", description = "remote-app-module-name",
		name = "remote_app_module_name", required = false
	)
	public String remoteAppModuleName();
}