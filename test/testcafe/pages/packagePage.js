import { Selector, t } from "testcafe";
import { DrawerView } from "./classes/drawerView";

class PackagePage extends DrawerView {
  constructor(name, selector) {
    super(name, selector);
    this.addToTripWithInsurance = Selector(
      "[data-testid=checkout-cta-with-insurance],[data-testid=continue-with-insurance-button]"
    );
  }

  async navigateToAddedViewWithInsurance() {
    await t.click(this.addToTripWithInsurance);
  }
}

export const packagePage = new PackagePage(
  "Package Page",
  Selector("[data-testid=package-car-card]")
);
