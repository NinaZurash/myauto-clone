import { API_ROUTES } from "@/routes/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${API_ROUTES.manufacturers}`);

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        {
          data: data,
          message: "manufacturers fetched successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          data: [],
          message: "manufacturers not found",
        },
        { status: 404 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}
