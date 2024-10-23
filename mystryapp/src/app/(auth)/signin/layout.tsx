import { Metadata } from "next";


export const metadata:Metadata={
    title:"Sign In: True Feedback",
    description:"Sign in to your account to get the best experience and to receive messages"
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

