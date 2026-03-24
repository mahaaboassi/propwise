import { atom } from "jotai";
import { DashboardData } from "@/lib/mock-api";
import { fetchDashboardData } from "@/lib/mock-api";

export const periodAtom = atom<
  "today" | "this_week" | "this_month" | "this_quarter" | "this_year" | "custom"
>("today") ;

export const dashboardDataAtom = atom<DashboardData | null>(null);

export const loadingAtom = atom(false);

export const fetchDashboardAtom = atom(
  null,
  async (get, set) => {
    const period = get(periodAtom);

    set(loadingAtom, true);

    try {
      const data = await fetchDashboardData({ period });
      set(dashboardDataAtom, data);
    } catch (e) {
      console.error(e);
    } finally {
      set(loadingAtom, false);
    }
  }
);