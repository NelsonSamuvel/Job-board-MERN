import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/general/AppSidebar";
import { HiBars3 } from "react-icons/hi2";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={false} className="min-h-max md:h-12">
      <AppSidebar />
      <main className="max-md:flex w-full gap-4 h-max items-center max-md:justify-between max-md:px-2">
        {children}
        <SidebarTrigger className="hover:text-primary md:hidden">
          <HiBars3 className="" />
        </SidebarTrigger>
      </main>
    </SidebarProvider>
  );
}
