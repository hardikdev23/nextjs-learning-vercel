// app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        status: "ok",
        env: process.env.EXAMPLE_NAME ?? "env-not-set",
        timestamp: new Date().toISOString(),
    });
}
