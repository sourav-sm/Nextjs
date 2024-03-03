import { NextRequest } from "next/server"

export async function POST(req:NextRequest){
    //extract the body
    const body=await req.json();
    //store the data in db
        console.log(body);
    return Response.json({
        
        message:"you are logged in"

    }) 
}