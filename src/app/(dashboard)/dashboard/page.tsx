import { ActivityFeed, DateFilterTabs, FixedInDashboard, HeaderDashboard, KPICards, PipelineSummary, RevenueForecast, TasksPanel } from "@/components/pages/dashboard"
import { Suspense } from "react"

const Dashboard = () =>{
    return(<div className="pt-[25px]">
        <div className="px-[30px] space-y-[26px]">
            <div className="flex flex-col gap-[18px]">
                <HeaderDashboard/>
                {/* Required for useSearchParams() (Next.js client-side hydration) */}
                <Suspense fallback={null}>
                    <DateFilterTabs />
                </Suspense>
            </div>
            <KPICards/>
            <div className="flex gap-[26px] w-full">
                <div className="w-[718px]">
                    <RevenueForecast/>
                </div>
                <div className="w-[400px]">
                    <ActivityFeed/>
                </div>
            </div>
            <div className="flex gap-[26px] w-full">
                <div className="w-[718px]">
                    <PipelineSummary/>
                </div>
                <div className="w-[400px]">
                    <TasksPanel/>
                </div>
            </div>
        </div>

        <FixedInDashboard/>
    </div>
 )
}
export default Dashboard