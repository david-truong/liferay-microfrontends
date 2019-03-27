<%@ include file="/init.jsp" %>

<div id="<%= htmlSelector %>"></div>

<script data-senna-track="temporary" src="<%= PortalUtil.getStaticResourceURL(request, request.getContextPath()+"/lib/require.js") %>"></script>

<script data-senna-track="temporary" type="text/javascript">

	var moduleName = "<%= moduleName %>";
	var bundleSrc =  "<%= bundleSrc %>";
	var htmlSelector = "<%= htmlSelector %>";

	require.config({
		paths: {
		  [moduleName]: bundleSrc
		},
	  	context: moduleName,
	  	waitSeconds: 7,
	  	deps: [moduleName],
	  	callback: function (module) {
          module.default(document.getElementById(htmlSelector), undefined, {
			user: JSON.parse(JSON.stringify(${lifereyContext})).map
          });
        }
	});
</script>