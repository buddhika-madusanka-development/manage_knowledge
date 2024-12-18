import { NextResponse } from "next/server"

export const GET = () => {

    const mongo_url = process.env.sample;
    console.log("mongoose URI is : " + mongo_url)
    
    return NextResponse.json({
        message : "This is youtube contente route...."
    })
}