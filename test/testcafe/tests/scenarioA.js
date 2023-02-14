import { gridView, listView, packagePage, addedView } from "../pages";

export const scenarioA = async () => {
  await gridView.checkView();
  await gridView.navigateToListView();
  await listView.checkView();
  await listView.navigateToPackagePage();
  await packagePage.checkView();
  await packagePage.navigateToAddedViewWithInsurance();
  await addedView.checkView();
};
