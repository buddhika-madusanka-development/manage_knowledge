import { NextResponse } from "next/server"

export const GET = () => {
    return NextResponse.json({
        message : 'This is single content api end...'
    })
}