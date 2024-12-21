import { dbConnect } from "@/lib/db"
import Content from "@/lib/models/Content.model";
import { NextResponse } from "next/server"

export const GET = async () => {

    await dbConnect();

    await Content.find({});
    
    return NextResponse.json({
        message : "youtube chanel api...."
    })
}