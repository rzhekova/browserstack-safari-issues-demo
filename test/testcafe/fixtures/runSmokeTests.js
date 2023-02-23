import { RequestHook } from "testcafe";
import { scenarioA } from "../tests/scenarioA";

class WhitelistHeader extends RequestHook {
  constructor() {
    super();
  }

  onRequest(e) {
    e.requestOptions.headers["x-bstack"] = process.env.WHITELIST_TOKEN;
  }

  onResponse(e) {}
}

const whitelistHeaderHook = new WhitelistHeader();

fixture`Run smoke tests`
  .page("https://www.rentalcars.com/take-off?destination=LHR")
  .requestHooks(whitelistHeaderHook);

test("Scenario A", scenarioA);
