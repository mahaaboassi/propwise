"use client"
import KPICard from "./kpi-card"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { useEffect } from "react"

const KPICards = () => {

    const { loading, data, refetch } = useDashboard()
    useEffect(()=>{refetch()},[refetch])
    console.log("KPI cards",data);
    
    if (loading) {
        return (
        <div className="grid mobile-sm:grid-cols-2 tablet-md:grid-cols-4 gap-[12px]">
            {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-[58px] w-full" />
            ))}
        </div>
        );
    }

    if (!data) return null;

    return(<div className="grid mobile-sm:grid-cols-2 tablet-md:grid-cols-4 gap-[12px]">
        { data.kpis.map((kpi,idx)=>(
            <KPICard key={`KPI_Card_${kpi.label}_${idx}`}
                label={kpi.label} trend={kpi.trend} trendDirection={kpi.trendDirection}
                sparklineData={kpi.sparklineData} value={kpi.value}
            />))
        }
    </div>)
}
export default KPICards