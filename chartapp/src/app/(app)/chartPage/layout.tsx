
import { Metadata } from 'next';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Chart Section',
  description:
    "Chart page for the provinding the user a visual representation for the data",
};
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
    <div className=" w-full lg:h-[80vh] lg:p-10 sm:p-5">
    <SidebarTrigger />
      {children}
    </div>
    </SidebarProvider>
  );
}