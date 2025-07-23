import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { Message } from "@/model/User";

export async function POST(request:Request){
    await dbConnect();
    const {username,content}=await request.json();
    try {
        const user=await UserModel.findOne({username});
        if(!user){
            return new Response('User not found', { status: 404 });
        }
        if(!user.isAcceptingMessages){
            return new Response('User is not accepting messages', { status: 400 });
        }
        const newMessage = { content, createdAt: new Date() };
        user.messages.push(newMessage as Message);
        await user.save();
        return new Response('Message sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error adding message:', error);
        return Response.json(
        { message: 'Internal server error', success: false },
        { status: 500 }
        );
    }
}