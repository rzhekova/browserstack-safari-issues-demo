import { scenarioA } from "../tests/scenarioA";

fixture`Run smoke tests`.page(
  "https://www.rentalcars.com/take-off?destination=LHR&departureDate=2023-05-18&returnDate=2023-05-20"
);

test("Scenario A", scenarioA);
