import { Metadata } from "next";


export const metadata:Metadata={
    title:"Verification Page:True Feedback ",
    description:"Verify yourself to get get access to your messages."
}
  interface RootLayoutProps {
    children: React.ReactNode;
  }
  
  export default async function RootLayout({ children }: RootLayoutProps) {
    return (
      <div>
            {children}
      </div>
            
          
    );
  }

