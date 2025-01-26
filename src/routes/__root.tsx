import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Home } from "lucide-react";
import "../global.css";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const sidebarMenuItems: React.ReactNode[] = [
    <Link to={"/"}>
      <Home />
      Home
    </Link>,
  ];

  return (
    <>
      <SidebarProvider>
        <AppSidebar sidebarMenuItems={sidebarMenuItems} />
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
      <TanStackRouterDevtools />
    </>
  );
}
