'use server'

import { NextRequest, NextResponse } from "next/server";



export default async function Middleware(req:NextRequest){

    const pathname = req.nextUrl.pathname;
    const redirectTo = "/home"
    if(pathname == "/"){
        return NextResponse.redirect(new URL(redirectTo,req.url))
    }


}