import { DashboardDataMock } from "@/lib/mock-data"
import KPICard from "./kpi-card"

const KPICards = () => {
    return(<section className="grid grid-cols-4 gap-4">
        {
            DashboardDataMock.kpis.map((kpi,idx)=>(
            <KPICard key={`KPI_Card_${kpi.label}_${idx}`}
                label={kpi.label} trend={kpi.trend} trendDirection={kpi.trendDirection}
                sparklineData={kpi.sparklineData} value={kpi.value}
            />))
        }
    </section>)
}
export default KPICards