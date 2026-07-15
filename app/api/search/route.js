import { NextResponse } from "next/server";

export async function GET(request) {
  try { 
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const page = Number(searchParams.get("page") ?? 1);
    const type = searchParams.get("type") ?? "both";
    let dataTypes;
    switch (type) {
      case "branded":
        dataTypes = ["Branded"];
        break;

      case "non-branded":
        dataTypes = ["Foundation"];
        break;

        case "survey":
          dataTypes = ["Survey (FNDDS)"];
          break;
  
        case "legacy":
          dataTypes = ["SR Legacy"];
          break;

      default:
        dataTypes = ["Foundation", "Branded"];
    }

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
          pageNumber: page,
          dataType: dataTypes
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("USDA Error:", response.status, errorText);
    
      return NextResponse.json(
        { error: errorText },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      foods: data.foods ?? [],
      pagination: {
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalHits: data.totalHits,
      },
    });
  } catch (error) {
    console.error(error)
    console.error(error.cause);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}