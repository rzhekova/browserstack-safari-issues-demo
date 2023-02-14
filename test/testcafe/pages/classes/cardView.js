import { View } from "./view";

export class CardView extends View {
	constructor(name, selector) {
		super(name, selector);
		this.iFrameId = "#iFrameCard";
	}
}
