import { Link } from "react-router-dom"
import { GalleryVerticalEndIcon } from "lucide-react"

import { LoginForm } from "@/components/login-form"

export function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted/30 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          shadcn/ui gallery
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
