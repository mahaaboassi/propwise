import { ActivityFeed, DateFilterTabs, FixedInDashboard, HeaderDashboard, KPICards, PipelineSummary, RevenueForecast, TasksPanel } from "@/components/pages/dashboard"
import { Suspense } from "react"

const Dashboard = () =>{
    return(<div className="space-y-5">
        <HeaderDashboard/>
        {/* Required for useSearchParams() (Next.js client-side hydration) */}
        <Suspense fallback={null}>
            <DateFilterTabs />
        </Suspense>

        <KPICards/>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 mobile-md:col-span-2">
                <RevenueForecast/>
            </div>
            <div className="col-span-3 mobile-md:col-span-1">
                <ActivityFeed/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 mobile-md:col-span-2">
                <PipelineSummary/>
            </div>
            <div className="col-span-3 mobile-md:col-span-1">
                <TasksPanel/>
            </div>
        </div>
        <FixedInDashboard/>
    </div>
 )
}
export default Dashboard