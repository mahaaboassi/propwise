import { ActivityFeed, DateFilterTabs, FixedInDashboard, HeaderDashboard, KPICards, PipelineSummary, RevenueForecast, TasksPanel } from "@/components/pages/dashboard"
import { Suspense } from "react"

const Dashboard = () =>{
    return(<div className="pt-[25px]">
        <div className="px-[10px] tablet-sm:px-[30px] space-y-[16px] desktop-md:space-y-[26px]">
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
            <div className="flex flex-col mobile-md:flex-row gap-[16px] desktop-md:gap-[26px] w-full">
                <div className="w-full mobile-md:w-[50%] tablet-md:w-[62.76%]">
                    <RevenueForecast/>
                </div>
                <div className="w-full mobile-md:w-[50%] tablet-md:w-[34.96%]">
                    <ActivityFeed/>
                </div>
            </div>
            <div className="flex flex-col tablet-md:flex-row gap-[16px] desktop-md:gap-[26px] w-full">
                <div className="w-full tablet-md:w-[62.76%]">
                    <PipelineSummary/>
                </div>
                <div className="w-full tablet-md:w-[34.96%]">
                    <TasksPanel/>
                </div>
            </div>
        </div>

        <FixedInDashboard/>
    </div>
 )
}
export default Dashboard