import { Selector, t } from "testcafe";
import { CardView } from "./classes/cardView";

class GridView extends CardView {
  constructor(name, selector) {
    super(name, selector);
    this.viewAllCarsButton = Selector(
      "[data-testid=view-search-results-button]"
    );
    this.pickUpLocationTextField = Selector(
      "[data-testid='input-text-searchbox-toolbox-fts']"
    );
    this.dropOffLocationTextField = Selector(
      "[data-testid='input-text-searchbox-toolbox-drop-off-fts']"
    );
    this.differentLocationCheckboxLabel = Selector(
      "[data-testid='searchbox-toolbox-drop-off-checkbox-label']"
    );
    this.pickUpFTSFirstSuggestion = Selector(
      "[id='searchbox-toolbox-fts-suggestion-0']"
    );
    this.dropOffFTSFirstSuggestion = Selector(
      "[id='searchbox-toolbox-drop-off-fts-suggestion-0']"
    );
  }

  async navigateToListView() {
    await t.click(this.viewAllCarsButton);
  }
}

export const gridView = new GridView(
  "Grid View",
  Selector("[data-testid=view-results-grid]")
);
