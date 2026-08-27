import { toast } from "sonner"
import { BellIcon, CheckIcon, MailIcon, PlusIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { SiteHeader } from "@/components/site-header"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-medium tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  )
}

export function ComponentsPage() {
  return (
    <TooltipProvider delay={150}>
      <div className="flex flex-1 flex-col">
        <SiteHeader />
        <div className="flex flex-col gap-12 p-4 md:p-8">
          <Section
            title="Buttons & badges"
            description="Primary actions, secondary actions, and status indicators."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Button size="icon" aria-label="Add">
                <PlusIcon />
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </Section>

          <Section
            title="Form controls"
            description="Inputs, textareas, radios, checkboxes, switches, and field wrappers."
          >
            <Card className="max-w-2xl">
              <CardHeader>
                <CardTitle>Compose a post</CardTitle>
                <CardDescription>
                  Edit values to confirm bindings across primitives.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FieldSet>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="title">Title</FieldLabel>
                      <Input id="title" placeholder="A clear, short title" />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <InputGroup>
                        <InputGroupAddon>
                          <MailIcon />
                        </InputGroupAddon>
                        <InputGroupInput
                          id="email"
                          type="email"
                          placeholder="you@domain.com"
                        />
                      </InputGroup>
                      <FieldDescription>
                        We'll never share your email.
                      </FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="body">Body</FieldLabel>
                      <Textarea
                        id="body"
                        placeholder="Write a few sentences..."
                        rows={4}
                      />
                    </Field>
                    <Field>
                      <FieldLabel>Visibility</FieldLabel>
                      <RadioGroup defaultValue="public" className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="public" id="r1" />
                          <Label htmlFor="r1">Public</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="team" id="r2" />
                          <Label htmlFor="r2">Team only</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="private" id="r3" />
                          <Label htmlFor="r3">Private</Label>
                        </div>
                      </RadioGroup>
                    </Field>
                    <Field orientation="horizontal">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="font-normal">
                        I agree to the terms
                      </Label>
                    </Field>
                    <Field orientation="horizontal">
                      <Switch id="notify" defaultChecked />
                      <Label htmlFor="notify" className="font-normal">
                        Email me about replies
                      </Label>
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </CardContent>
              <CardFooter className="justify-end gap-2">
                <Button variant="ghost">Cancel</Button>
                <Button onClick={() => toast.success("Saved")}>
                  <CheckIcon />
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Section>

          <Section
            title="Tabs, toggles, pagination"
            description="Switch contexts, toggle state, navigate lists."
          >
            <Tabs defaultValue="overview" className="max-w-2xl">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="rounded-md border p-4 text-sm text-muted-foreground">
                A high-level summary of the latest activity.
              </TabsContent>
              <TabsContent value="analytics" className="rounded-md border p-4 text-sm text-muted-foreground">
                Trend lines and segment breakdowns.
              </TabsContent>
              <TabsContent value="reports" className="rounded-md border p-4 text-sm text-muted-foreground">
                Saved reports and scheduled exports.
              </TabsContent>
            </Tabs>

            <div className="flex flex-wrap items-center gap-4">
              <ToggleGroup defaultValue={["day"]} variant="outline">
                <ToggleGroupItem value="day">Day</ToggleGroupItem>
                <ToggleGroupItem value="week">Week</ToggleGroupItem>
                <ToggleGroupItem value="month">Month</ToggleGroupItem>
              </ToggleGroup>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </Section>

          <Section
            title="Avatars, skeletons, progress"
            description="Identity, loading states, and completion."
          >
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Spinner />
                Loading…
              </div>
              <div className="flex w-full max-w-sm flex-col gap-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Storage</span>
                  <span>72%</span>
                </div>
                <Progress value={72} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Skeleton className="size-12 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-40" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </Section>

          <Section
            title="Tooltips & toasts"
            description="Affordance hints and ephemeral feedback."
          >
            <div className="flex flex-wrap items-center gap-3">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="Notifications" />}>
                  <BellIcon />
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>
              <Button
                variant="outline"
                onClick={() => toast("Event recorded", { description: "Just now" })}
              >
                Show toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  toast.promise(new Promise((r) => setTimeout(r, 1200)), {
                    loading: "Saving…",
                    success: "Done",
                    error: "Failed",
                  })
                }
              >
                Promise toast
              </Button>
            </div>
          </Section>

          <Separator />
          <p className="text-xs text-muted-foreground">
            shadcn/ui primitives, rendered against your local theme tokens.
          </p>
        </div>
      </div>
    </TooltipProvider>
  )
}
