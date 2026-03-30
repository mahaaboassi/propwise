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
            {/* Main width ( 1144px )
                718px it's 62.76% from 1144px => w-[62.76%]
                400px it's 34.96% from 1144px => w-[34.96%]
             */}
            <div className="flex gap-[26px] w-full">
                <div className="w-[62.76%]">
                    <RevenueForecast/>
                </div>
                <div className="w-[34.96%]">
                    <ActivityFeed/>
                </div>
            </div>
            <div className="flex gap-[26px] w-full">
                <div className="w-[62.76%]">
                    <PipelineSummary/>
                </div>
                <div className="w-[34.96%]">
                    <TasksPanel/>
                </div>
            </div>
        </div>

        <FixedInDashboard/>
    </div>
 )
}
export default Dashboard