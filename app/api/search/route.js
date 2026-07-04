import { NextResponse } from "next/server";

export async function POST(request) {
  const dataTypes = ["Foundation", "Branded"];
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: "Search query is required." },
        { status: 400 }
      );
    }
    
    const response = await fetch(
      `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${process.env.FDC_API_KEY}`,
      {
        next: {
          revalidate: 86400,
        },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          pageSize: 10,
          pageNumber: 1,
          dataType: dataTypes
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}