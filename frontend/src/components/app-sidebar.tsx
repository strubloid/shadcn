"use client"

import * as React from "react"

import { ModeToggle } from "@/components/mode-toggle"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {
  GalleryVerticalEndIcon,
  AudioLinesIcon,
  TerminalIcon,
  LayoutDashboardIcon,
  BarChart3Icon,
  ComponentIcon,
  LogInIcon,
  UserPlusIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
} from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: <GalleryVerticalEndIcon />,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: <AudioLinesIcon />,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: <TerminalIcon />,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <LayoutDashboardIcon />,
    },
    {
      title: "Charts",
      url: "/charts",
      icon: <BarChart3Icon />,
    },
    {
      title: "Components",
      url: "/components",
      icon: <ComponentIcon />,
    },
    {
      title: "Login",
      url: "/login",
      icon: <LogInIcon />,
    },
    {
      title: "Sign up",
      url: "/signup",
      icon: <UserPlusIcon />,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard",
      icon: <FrameIcon />,
    },
    {
      name: "Sales & Marketing",
      url: "/charts",
      icon: <PieChartIcon />,
    },
    {
      name: "Travel",
      url: "/components",
      icon: <MapIcon />,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between gap-2 px-2 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
          <NavUser user={data.user} />
          <ModeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
