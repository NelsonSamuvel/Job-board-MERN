import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/general/AppSidebar";
import { Button } from "@/components/ui/button";
import { HiBars3 } from "react-icons/hi2";

export default function Layout({ children }: { children: React.ReactNode }) {



  return (
    <SidebarProvider defaultOpen={false} className="min-h-max">
      <AppSidebar/>
      <main className="max-md:flex w-full gap-4 max-md:h-max items-center max-md:justify-between max-md:px-2">
        {children}
        <SidebarTrigger>
          <Button size="sm" className="sm:hidden">
            <HiBars3 className="w-10 h-10" />
          </Button>
        </SidebarTrigger>
      </main>
    </SidebarProvider>
  );
}
