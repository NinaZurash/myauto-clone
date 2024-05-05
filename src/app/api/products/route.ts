import { API_ROUTES } from "@/routes/api-routes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const sortOrder = query.get("SortOrder");
  const periodFilter = query.get("Period");
  const manFilter = query.get("Mans");
  const catFilter = query.get("Cats");
  const forRent = query.get("ForRent");
  const priceFrom = query.get("PriceFrom");
  const priceTo = query.get("PriceTo");

  try {
    const response = await fetch(
      `${API_ROUTES.products}?SortOrder=${sortOrder}&Period=${periodFilter}&Mans=${manFilter}&Cats=${catFilter}&ForRent=${forRent}&PriceFrom=${priceFrom}&PriceTo=${priceTo}`
    );

    const data = await response.json();
    if (response.ok) {
      return NextResponse.json(
        {
          data: data.data,
          message: "Products fetched successfully",
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          items: [],
          message: "Products not found",
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
