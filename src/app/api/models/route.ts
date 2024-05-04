import { API_ROUTES } from "@/routes/api-routes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const manId = query.get("man_id");

  try {
    const response = await fetch(`${API_ROUTES.models}?man_id=${manId}`);

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        {
          data: data,
          message: "Models fetched successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          data: [],
          message: "models not found",
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
