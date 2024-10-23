
export async function generateMetadata({
  params,
}:
{
params:{username:string}
}){
  return{
  title:`${params.username} Dashboard:True Feedback`,
  description:"Check your messages here and share the link"
  }
  
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

