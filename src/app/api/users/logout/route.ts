import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "logout successfully",
      success: true,
    });
    response.cookies.set("token","",{httpOnly:true,expires:new Date(0)});
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.messae }, { status: 500 });
  }
}
