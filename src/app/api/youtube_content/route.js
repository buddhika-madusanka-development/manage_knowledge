import { NextResponse } from "next/server"

export const GET = () => {

    console.log("mongoose URI is : " + process.env.MONGO_URI)
    
    return NextResponse.json({
        message : "This is youtube contente route...."
    })
}