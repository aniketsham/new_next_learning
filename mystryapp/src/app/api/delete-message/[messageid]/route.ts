import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import {User} from "next-auth"


export async function DELETE(request:Request,{params}:{
    params:{messageid:string}
}){
    const messageId=params.messageid
    await dbConnect()
    const session=await getServerSession(authOptions)
    const user:User= session?.user

    if(!session || !session.user){
        return Response.json({
            success:false,
            message:"Not Authenticated "
        },
    {
        status:401
    })
    }

    try {
        const updateResult=await UserModel.updateOne(
            {_id:user._id},
            {$pull:{messages:{_id:messageId}}}

        )

        if(updateResult.modifiedCount==0){
            return Response.json({
                success:false,
                message:"Message not found or Already deleted"
            },
        {
            status:401
        })
        }

        return Response.json({
            success:false,
            message:"Message Deleted"
        },
    {
        status:200
    })
    } catch (error) {
        console.log(error)
        return Response.json({
            success:false,
            message:"error deleting message"
        },
    {
        status:500
    })
    }
   
}