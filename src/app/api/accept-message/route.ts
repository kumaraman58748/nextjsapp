import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";

export async function POST(request:Request) {
    await dbConnect();
    const session = await getServerSession(authOptions);
    const user=session?.user
    if(!session || !session.user){
        return new Response('Unauthorized', { status: 401 });
    }
    const userId=user._id;
    const {isAcceptingMessages}=await request.json();
    try {
        const updatedUser=await UserModel.findOneAndUpdate({ _id: userId }, { isAcceptingMessages }, { new: true });
        return new Response(JSON.stringify(updatedUser), { status: 200 });  
    } catch (error) {
        console.error('Error updating user:', error);
        return new Response('Error updating user', { status: 500 });
    }

}