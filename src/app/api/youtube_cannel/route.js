import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        message : "This is youtube chanel end point..."
    })
}