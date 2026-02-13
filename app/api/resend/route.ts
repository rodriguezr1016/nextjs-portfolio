import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req:Request) {
    const body = await req.json();
    const name = body.name;
    const email = body.email;
    const message = body.message;
    try {
        const data = await resend.emails.send({
            from:"onboarding@resend.dev",
            to:"r.rodri101611@gmail.com",
            subject:`New message from ${name}`,
            html:`
            <h1>${name}</h1>
            <h3>${email}</h3>
            <p>${message}</p>`
        })
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(error);
    }
}