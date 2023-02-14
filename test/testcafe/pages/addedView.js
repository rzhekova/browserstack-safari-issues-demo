import { Selector } from "testcafe";
import { CardView } from "./classes/cardView";

class AddedView extends CardView {
  constructor(name, selector) {
    super(name, selector);
  }
}

export const addedView = new AddedView(
  "Added View",
  Selector("[data-testid=added-view-car-card]")
);
