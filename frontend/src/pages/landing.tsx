import { Link } from "react-router-dom"
import {
  LayoutDashboardIcon,
  BarChart3Icon,
  ComponentIcon,
  LogInIcon,
  UserPlusIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    label: "Dashboards",
    items: [
      {
        title: "Dashboard",
        description: "Section cards, area chart, sortable data table.",
        href: "/dashboard",
        icon: LayoutDashboardIcon,
        badge: "Popular",
      },
      {
        title: "Charts",
        description: "Area, bar, line, and pie charts powered by Recharts.",
        href: "/charts",
        icon: BarChart3Icon,
      },
    ],
  },
  {
    label: "Auth",
    items: [
      {
        title: "Login",
        description: "Centered card with email + password form.",
        href: "/login",
        icon: LogInIcon,
      },
      {
        title: "Sign up",
        description: "Registration flow with terms and social providers.",
        href: "/signup",
        icon: UserPlusIcon,
      },
    ],
  },
  {
    label: "Foundations",
    items: [
      {
        title: "Components",
        description: "Every installed shadcn primitive on one page.",
        href: "/components",
        icon: ComponentIcon,
      },
    ],
  },
]

export function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:py-24">
          <Badge
            variant="outline"
            className="w-fit gap-1.5 rounded-full px-3 py-1 text-xs font-normal"
          >
            <SparklesIcon className="size-3" />
            Local shadcn/ui playground
          </Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl">
            Every shadcn block, rendered in your own project.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground text-pretty md:text-lg">
            A working gallery of the components and page templates you've
            installed. Tweak tokens, swap copy, and watch every screen update
            in real time.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              render={<Link to="/dashboard" />}
            >
              Open dashboard
              <ArrowRightIcon />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              render={<Link to="/components" />}
            >
              Browse components
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 md:py-16">
        {categories.map((category) => (
          <div key={category.label} className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <h2 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {category.label}
              </h2>
              <span className="text-xs text-muted-foreground tabular-nums">
                {category.items.length}{" "}
                {category.items.length === 1 ? "block" : "blocks"}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.title}
                    to={item.href}
                    className="group focus-visible:outline-none"
                  >
                    <Card className="h-full transition-colors group-hover:bg-muted/40 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex size-9 items-center justify-center rounded-md border bg-background">
                            <Icon className="size-4" />
                          </div>
                          {item.badge ? (
                            <Badge variant="secondary">{item.badge}</Badge>
                          ) : null}
                        </div>
                        <CardTitle className="mt-4 text-lg">
                          {item.title}
                        </CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
