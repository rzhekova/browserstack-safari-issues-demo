import { t } from "testcafe";

export class View {
	constructor(name, selector) {
		this.name = name;
		this.selector = selector;
		this.iFrameId = "";
	}

	async checkView() {
		await t.switchToMainWindow().switchToIframe(this.iFrameId);
		await t.expect(this.selector.exists).ok(`There was an error displaying ${this.name}`);
	}
}
