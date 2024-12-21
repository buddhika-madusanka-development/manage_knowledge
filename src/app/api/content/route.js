import { dbConnect } from "@/lib/db"
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"

export const GET = async () => {

    await dbConnect();

    const contents = await Content.find({});
    
    return NextResponse.json(contents, {
        status : 200
    })
}


export const POST = async (req) => {

    const postBody = await req.json();
    console.log("post body is : " + postBody)
    
    await dbConnect();

    const newPost = await Content.create(postBody)

    console.log(newPost)
    
    return NextResponse.json({
        message : "This is content post request....",
    })
    
}