import { Metadata } from "next";


export const metadata:Metadata={
    title:"Sign Up: True Feedback",
    description:"Register yourself to get the best experience and to receive messages."
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

