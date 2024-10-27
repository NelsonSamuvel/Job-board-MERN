import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navItems } from "@/utils/ui-data";
import { HiArrowRight } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar() {
  const { setOpenMobile, isMobile } = useSidebar();

  const location = useLocation();

  const handleSidebar = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <button
              onClick={handleSidebar}
              className="text-xl text-secondary-foreground"
            >
              <HiArrowRight className="hover:text-primary" />
            </button>
          </SidebarGroupLabel>
          <SidebarGroupContent className="my-4">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                    className={`hover:text-primary active:text-primary data-[active=true]:text-primary`}
                  >
                    <NavLink
                      to={item.url}
                      className=""
                      onClick={() => setOpenMobile(false)}
                    >
                      <item.icon />
                      <span className="font-poppins">{item.name}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
