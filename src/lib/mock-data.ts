import { Sidebar } from "@/types/dashboard";
import { DashboardData } from "./mock-api";

export const DashboardDataMock = {
    kpis: [
      {
        label: "Total Leads",
        value: "248",
        trend: 12.4,
        trendDirection: "up",
        sparklineData: [10, 20, 15, 30, 25, 40, 35],
      },
      {
        label: "Revenue YTD",
        value: "AED 1.42M",
        trend: 24.6,
        trendDirection: "up",
        sparklineData: [20, 25, 30, 28, 35, 50, 60],
      },
      {
        label: "Active Deals",
        value: "43",
        trend: 8.2,
        trendDirection: "up",
        sparklineData: [5, 10, 8, 15, 12, 18, 20],
      },
      {
        label: "Completed Tasks",
        value: "156",
        trend: 24.6,
        trendDirection: "up",
        sparklineData: [30, 40, 35, 50, 45, 60, 70],
      },
    ],

    revenue: {
      total: "AED 1.42M",
      trend: 24.6,
      data: [
        { month: "Jan", thisYear: 120, lastYear: 90 },
        { month: "Feb", thisYear: 150, lastYear: 110 },
        { month: "Mar", thisYear: 180, lastYear: 130 },
        { month: "Apr", thisYear: 200, lastYear: 140 },
      ],
    },

    pipeline: {
      totalDeals: 43,
      totalStages: 6,
      totalValue: "AED 2.75M",
      stages: [
        { stage: "New Lead", count: 42, value: 840000, currency: "AED" },
        { stage: "Contacted", count: 28, value: 560000, currency: "AED" },
        { stage: "Qualified", count: 18, value: 450000, currency: "AED" },
        { stage: "Proposal", count: 18, value: 450000, currency: "AED" },
        { stage: "Negotiation", count: 12, value: 300000, currency: "AED" },
        { stage: "Closed Won", count: 8, value: 200000, currency: "AED" },
      ],
    },

    activities: {
      groups: [
        {
          label: "Today",
          entries: [
            {
              id: "1",
              message: "Updated deal #1024 documents",
              highlights: [{ text: "deal #1024", type: "deal" }],
              timestamp: "4:30 PM",
              relativeTime: "now",
              icon: "task",
            },
          ],
        },
      ],
    },

    tasks: {
      completed: 3,
      total: 5,
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
          completed: false,
        },
        {
          id: "3",
          title: "Schedule viewing – Palm Jumeirah",
          dueLabel: "Due · 2:00 PM",
          isOverdue: false,
          type: "meeting",
          priority: "med",
          completed: false,
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
  } satisfies DashboardData;



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