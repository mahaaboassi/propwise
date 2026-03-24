import { Header, DateFilterTabs, KPICards } from "@/components/pages/dashboard"

const Dashboard = () =>{
    return(<div className="space-y-5">
        <Header level={1} title="Dashborad" paragraph="Here's your pipeline health and sales activity at a glance." />
        <DateFilterTabs/>
        <KPICards/>
    </div>)
}
export default Dashboard