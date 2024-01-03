import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

console.log("middleware.ts")

export default function middleware(req: NextRequest) {
    let url = req.nextUrl.pathname;
    console.log(url);
    return NextResponse.next()
}