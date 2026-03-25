import { atom } from "jotai";
import { DashboardData } from "@/lib/mock-api";
import { fetchDashboardData } from "@/lib/mock-api";
import { appToast } from "@/lib/toast";

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

      // This to check erro state
      // if (period === "today") {
      //   throw new Error("Fake error")
      // }

      set(dashboardDataAtom, data);
    } catch (e) {
      console.error(e);
      appToast.action({
          message: "Something went wrong",
          label: "Retry",
          type: "error",
          onAction: async () => {
            await set(fetchDashboardAtom)
        }
      })

    } finally {
      set(loadingAtom, false);
    }
  }
);