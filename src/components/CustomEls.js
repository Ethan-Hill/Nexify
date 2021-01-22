// This lets us define the diffrent custom elements. Made by corbin

import {useLayoutEffect, useRef } from "react";

import {
	setAssetPath,
	SlButton,
	SlSpinner,
	SlTheme,
	SlIcon,
	SlDrawer,
	SlMenuDivider,
	SlRange,
  } from "@shoelace-style/shoelace";

function CustomEls({ URL }) {
	const customEls = useRef(false);
  
	useLayoutEffect(() => {
	  if (customEls.current) {
		return;
	  }
	  setAssetPath(`${URL}/static/static`);
	  customElements.define("sl-button", SlButton);
	  customElements.define("sl-spinner", SlSpinner);
	  customElements.define("sl-theme", SlTheme);
	  customElements.define("sl-icon", SlIcon);
	  customElements.define("sl-drawer", SlDrawer);
	  customElements.define("sl-menu-divider", SlMenuDivider);
	  customElements.define("sl-range", SlRange);
	  customEls.current = true;
	}, [URL, customEls]);
  
	return null;
  }


export default CustomEls