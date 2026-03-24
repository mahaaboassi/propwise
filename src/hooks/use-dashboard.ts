import { useAtom } from "jotai";
import {
  periodAtom,
  dashboardDataAtom,
  loadingAtom,
  fetchDashboardAtom,
} from "@/store/dashboard";

type Period = | "today" | "this_week" | "this_month" | "this_quarter" | "this_year" | "custom";

export const useDashboard = () => {
  const [period, setPeriod] = useAtom(periodAtom);
  const [data] = useAtom(dashboardDataAtom);
  const [loading] = useAtom(loadingAtom);
  const [, fetchDashboard] = useAtom(fetchDashboardAtom);

  const changePeriod = (newPeriod:Period) => {
    setPeriod(newPeriod);
    fetchDashboard();
  };

  return {
    period,
    data,
    loading,
    changePeriod,
    refetch: fetchDashboard,
  };
};