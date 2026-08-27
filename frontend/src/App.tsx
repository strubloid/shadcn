import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "sonner"

import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { LandingPage } from "@/pages/landing"
import { DashboardPage } from "@/pages/dashboard"
import { LoginPage } from "@/pages/login"
import { SignupPage } from "@/pages/signup"
import { ChartsPage } from "@/pages/charts"
import { ComponentsPage } from "@/pages/components"

function ChromeShell({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/dashboard"
          element={
            <ChromeShell>
              <DashboardPage />
            </ChromeShell>
          }
        />
        <Route
          path="/charts"
          element={
            <ChromeShell>
              <ChartsPage />
            </ChromeShell>
          }
        />
        <Route
          path="/components"
          element={
            <ChromeShell>
              <ComponentsPage />
            </ChromeShell>
          }
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
