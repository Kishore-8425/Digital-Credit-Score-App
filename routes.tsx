import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { Analytics } from "./components/Analytics";
import { LoanOffers } from "./components/LoanOffers";
import { EMIPlanner } from "./components/EMIPlanner";
import { Notifications } from "./components/Notifications";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "analytics", Component: Analytics },
      { path: "loans", Component: LoanOffers },
      { path: "emi-planner", Component: EMIPlanner },
      { path: "notifications", Component: Notifications },
    ],
  },
]);
