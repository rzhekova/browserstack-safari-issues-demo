import { Selector, t } from "testcafe";
import { DrawerView } from "./classes/drawerView";

class ListView extends DrawerView {
  constructor(name, selector) {
    super(name, selector);
    this.firstCarInListDesktop = Selector("button")
      .withExactText("View deal")
      .nth(0);
    this.firstCarInListMobile = Selector(
      "[data-testid=make-and-model-heading]"
    ).nth(0);
  }

  async navigateToPackagePage() {
    if (await this.firstCarInListDesktop.exists) {
      await t.click(this.firstCarInListDesktop);
      return;
    }

    await t.click(this.firstCarInListMobile);
  }
}

export const listView = new ListView(
  "List View",
  Selector("[data-testid=search-results-container]")
);
