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
        <div className="grid mobile-md:grid-cols-2 desktop-sm:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full" />
            ))}
        </div>
        );
    }

    if (!data) return null;

    return(<div className="grid mobile-md:grid-cols-2 desktop-sm:grid-cols-4 gap-4">
        { data.kpis.map((kpi,idx)=>(
            <KPICard key={`KPI_Card_${kpi.label}_${idx}`}
                label={kpi.label} trend={kpi.trend} trendDirection={kpi.trendDirection}
                sparklineData={kpi.sparklineData} value={kpi.value}
            />))
        }
    </div>)
}
export default KPICards