import { Header, DateFilterTabs, KPICards, RevenueForecast, ActivityFeed, PipelineSummary, TasksPanel } from "@/components/pages/dashboard"

const Dashboard = () =>{
    return(<div className="space-y-5">
        <Header level={1} title="Dashborad" paragraph="Here's your pipeline health and sales activity at a glance." />
        <DateFilterTabs/>
        <KPICards/>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <RevenueForecast/>
            </div>
            <div className="col-span-1">
                <ActivityFeed/>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <PipelineSummary/>
            </div>
            <div className="col-span-1">
                <TasksPanel/>
            </div>
        </div>
    </div>)
}
export default Dashboard