import { Sidebar } from "@/types/dashboard";
import { DashboardData } from "./mock-api";

type TrendDirection = "up" | "down";

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getTrend = (current: number, previous: number): {
    trend: number;
    trendDirection: TrendDirection;
  } => {
    console.log(current , previous);
    
  return {
    trend: Number((((current - previous) / previous) * 100).toFixed(1)),
    trendDirection: current >= previous ? "up" : "down",
  };
};

export const getMockDashboardData = (): DashboardData => {
  // const baseRevenue = getRandom(100, 300);
  // console.log("here", baseRevenue, period);


  const revenueData = Array.from({ length: 12 }, (_, i) => ({
    month: `M${i + 1}`,
    thisYear: getRandom(0, 240),
    lastYear: getRandom(0, 240),
  }));

  const makeKpi = (label: string, min: number, max: number) => {
    const current = getRandom(min, max);
    const previous = getRandom(min, max);

    const { trend, trendDirection } = getTrend(current, previous);

    return {
      label,
      value: `${current}`,
      trend,
      trendDirection,
      sparklineData: Array.from({ length: 7 }, () => getRandom(min, max)),
    };
  };
  return {
    kpis: [
      makeKpi("Total Leads", 0, 50),
      makeKpi("Revenue YTD", 0, 1000),
      makeKpi("Active Deals", 0, 50),
      makeKpi("Completed Tasks", 0, 50),
    ],

    revenue: {
      total: `AED ${getRandom(500, 2000)}K`,
      trend: getRandom(5, 40),
      data: revenueData,
    },

    pipeline: {
      totalDeals: getRandom(50, 200),
      totalStages: 6,
      totalValue: `AED ${getRandom(1, 5)}M`,
      stages: [
        { stage: "New Lead", count: getRandom(20, 80), value: getRandom(100000, 800000), currency: "AED" },
        { stage: "Contacted", count: getRandom(20, 80), value: getRandom(100000, 800000), currency: "AED" },
        { stage: "Qualified", count: getRandom(20, 80), value: getRandom(100000, 800000), currency: "AED" },
        { stage: "Proposal", count: getRandom(10, 50), value: getRandom(100000, 500000), currency: "AED" },
        { stage: "Negotiation", count: getRandom(10, 40), value: getRandom(100000, 400000), currency: "AED" },
        { stage: "Closed Won", count: getRandom(5, 20), value: getRandom(50000, 200000), currency: "AED" },
      ],
    },

    activities: {
      groups: [
        {
          label: "Just now",
          entries: [
            {
              id: "1",
              message: "You were assigned a new lead:",
              highlights: [{ text: "Ahmed Al-Rashid", type: "person" }],
              timestamp: "10 min ago",
              relativeTime: "now",
              icon: "lead",
            },
            {
              id: "2",
              message: "System transferred deal to",
              highlights: [{ text: "Negotiation stage", type: "stage" }],
              timestamp: "25 min ago",
              relativeTime: "now",
              icon: "deal",
            },
          ],
        },{
          label: "Earlier today",
          entries: [
            {
              id: "1",
              message: "Nadia K. logged a call with",
              highlights: [{ text: "James Chen", type: "person" }],
              timestamp: "1h ago",
              relativeTime: "now",
              icon: "call",
            },
          ],
        },
      ],
    },

    tasks: {
      completed: getRandom(1, 5),
      total: getRandom(5, 10),
       items: [
        {
          id: "1",
          title: "Update deal #1024 documents",
          dueLabel: "Due · 4:30 PM",
          isOverdue: false,
          type: "task",
          priority: "low",
          completed: false,
        },
        {
          id: "2",
          title: "Send proposal to Sarah Mitchell",
          dueLabel: "Due · 11:00 AM",
          isOverdue: false,
          type: "email",
          priority: "high",
          completed: true,
        },
        {
          id: "3",
          title: "Schedule viewing – Palm Jumeirah",
          dueLabel: "Due · 2:00 PM",
          isOverdue: false,
          type: "meeting",
          priority: "med",
          completed: true,
        },
        {
          id: "4",
          title: "Weekly team sync",
          dueLabel: "Upcoming · 5:00 PM",
          isOverdue: false,
          type: "meeting",
          priority: "med",
          completed: false,
        },
        {
          id: "5",
          title: "Follow up with Ahmed AlRashid",
          dueLabel: "Overdue · 2h ago",
          isOverdue: true,
          type: "call",
          priority: "high",
          completed: false,
        },
      ],
    },
  };
};

export const sidebarData: Sidebar[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    link: "/dashboard",
    icon: "dashboard",
    children: [],
  },
  {
    name: "CRM",
    key: "crm",
    children: [
        {name: "Inbox", icon: "inbox", link: "/inbox"},
        {name: "Leads", icon: "leads", link: "/leads"},
        {name: "Deals", icon: "deals", link: "/deals"},
        {name: "Contacts", icon: "contacts", link: "/contacts"},
        {name: "Tasks", icon: "tasks", link: "/tasks"},
        {name: "Calendar", icon: "calendar", link: "/calendar"}
    ],
  },{
    name: "Workspace",
    key: "workspace",
    children: [
        {name: "Properties", icon: "properties", link: "",
            children:[
                {name: "Properties 1", icon: "properties", link: "",},
                {name: "Properties 2", icon: "properties", link: "",}
            ]},
        {name: "Marketing", icon: "marketing", link: "",
            children:[
                {name: "Marketing 1", icon: "marketing", link: "",},
                {name: "Marketing 2", icon: "marketing", link: "",}
            ]},
        {name: "Reports", icon: "reports", link: "",
            children:[
                {name: "Reports 1", icon: "reports", link: "",},
                {name: "Marketing 2", icon: "reports", link: "",}
            ]},
    ],
  },  {
    name: "Team",
    key: "team",
    link: "/team",
    icon: "inbox",
    children: [],
  }, {
    name: "Settings",
    key: "settings",
    link: "/settings",
    icon: "settings",
    children: [],
  },
];