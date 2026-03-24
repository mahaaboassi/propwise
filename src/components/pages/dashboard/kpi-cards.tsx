"use client"
import KPICard from "./kpi-card"
import { useDashboard } from "@/hooks/use-dashboard"
import Skeleton from "./dashboard-skeleton"
import { useEffect } from "react"

const KPICards = () => {
    const { loading, data, refetch} = useDashboard()
    useEffect(()=>{refetch()},[])
    return(<div className="grid grid-cols-4 gap-4">
        { loading ? [...Array(4)].map((_,i)=><Skeleton className="h-25 w-full" key={`Sketlon_KPI_${i}`}/>):
            data && data.kpis.map((kpi,idx)=>(
            <KPICard key={`KPI_Card_${kpi.label}_${idx}`}
                label={kpi.label} trend={kpi.trend} trendDirection={kpi.trendDirection}
                sparklineData={kpi.sparklineData} value={kpi.value}
            />))
        }
    </div>)
}
export default KPICards