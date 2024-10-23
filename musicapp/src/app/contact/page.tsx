import { Metadata } from 'next';
import Contactus from './contactus';


export const metadata:Metadata={
    title:"Contact us"
}

const page = () => {
   
  
  return (
    <div>
        <Contactus/>
    </div>
  )
}

export default page
