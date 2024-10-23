import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Dashboard: True Feedback',
  description:
    "Dashboard of the True Feedback App",
};
export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}