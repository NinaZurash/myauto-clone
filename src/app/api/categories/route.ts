import { API_ROUTES } from "@/routes/api-routes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(`${API_ROUTES.categories}`);

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        {
          data: data.data,
          message: "Categories fetched successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          items: [],
          message: "Categories not found",
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
