import { LineChart,CandlestickChart,BarChart,AreaChart } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Line Chart",
    url: "/chartPage/Line",
    icon: LineChart,
  },
  {
    title: "Candle Stick",
    url: "/chartPage/CandleStick",
    icon: CandlestickChart,
  },
  {
    title: "Bar Chart",
    url: "/chartPage/Bar",
    icon: BarChart,
  },
  {
    title: "Area Chart",
    url: "/chartPage/Area",
    icon: AreaChart,
  },
  {
    title: "Candle Stick Chart",
    url: "/chartPage/CandleStick",
    icon: CandlestickChart,
  },
  {
    title: "Area + Bar Chart",
    url: "/chartPage/AreaBar",
    icon: AreaChart,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
