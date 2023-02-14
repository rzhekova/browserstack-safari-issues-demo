import { View } from "./view";

export class DrawerView extends View {
	constructor(name, selector) {
		super(name, selector);
		this.iFrameId = "#iFrameDrawer";
	}
}
