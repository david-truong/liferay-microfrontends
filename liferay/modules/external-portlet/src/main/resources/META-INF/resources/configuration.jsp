
<%--
JSP for the configuration class and configuration action.
--%>
<%@ include file="./init.jsp" %>

<liferay-portlet:actionURL portletConfiguration="${true}"
                           var="configurationActionURL" />

<liferay-portlet:renderURL portletConfiguration="${true}"
                           var="configurationRenderURL" />

<div class="container">

<aui:form action="${configurationActionURL}" method="post" name="fm">

	<aui:input name="<%= Constants.CMD %>" type="hidden"
	           value="<%= Constants.UPDATE %>" />

	<aui:input name="redirect" type="hidden"
	           value="${configurationRenderURL}" />

	<aui:fieldset>
		<aui:input name="remote_app_bundle_src" label="remote_app_bundle_src" type="text"
		           value="<%=bundleSrc%>" required="true" />
		<aui:input name="remote_app_html_selector" label="remote_app_html_selector" type="text"
		           value="<%=htmlSelector%>" required="true" />
		<aui:input name="remote_app_module_name" label="remote_app_module_name" type="text"
		           value="<%=moduleName%>" required="true" />
	</aui:fieldset>
	<aui:button-row>
		<aui:button type="submit"></aui:button>
	</aui:button-row>
</aui:form>
</div>