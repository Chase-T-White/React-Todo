import { NextResponse } from "next/server";
import randomTasks from "./randomTasks.json";

export async function GET(request) {
  return NextResponse.json(randomTasks);
}
