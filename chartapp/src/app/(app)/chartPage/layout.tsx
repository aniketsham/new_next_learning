
import { Metadata } from 'next';
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
    <div className="flex flex-col min-h-screen">
    
      {children}
    </div>
  );
}