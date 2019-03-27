class RemoteApp extends HTMLElement {

	$(selector) {
		return this.shadowRoot && this.shadowRoot.querySelector(selector)
	}

	constructor() {
		super();

		const template = this.createTemplate();

		const src = this.getAttribute('src');
		const selector = this.getAttribute('selector');
		const moduleName = this.getAttribute('moduleName');


		if (!this.shadowRoot) {
			this.attachShadow({mode: 'open'});

			this.shadowRoot.appendChild(template.content.cloneNode(true));
			// this.shadowRoot.appendChild(script);
		}

		if (this.shadowRoot) {
			var component = this;

			var shadowRoot = component.shadowRoot;

			require.config({
				paths: {[moduleName]: src}
			});

			require([moduleName], function (module) {
				shadowRoot.module = module;

				shadowRoot.module.default(component.$('div'), shadowRoot, ["AAA","BBB"]);
			});
		}

	};

	connectedCallback() {
		console.log('connectedCallback');
	}

	disconnectedCallback() {
		console.log('disconnectedCallback');
	}

	createTemplate() {
		const selector = this.getAttribute('selector');

		const templateString = `
			<div id="${selector}">Loading...</div>
		`;

		const template = document.createElement('template');
		template.innerHTML = templateString;

		return template;
	};
}

window.WebComponents.waitFor(() => customElements.define('remote-app', RemoteApp));
