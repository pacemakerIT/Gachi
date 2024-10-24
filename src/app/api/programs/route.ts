import { NextResponse } from 'next/server';

// Define the GET method to fetch program data from Django API
export async function GET(request: Request) {
  try {
    // Fetch data from Django API
    const response = await fetch('http://127.0.0.1:8000/programs/');

    // Check if the response is ok (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();

    // Return the data as JSON response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch programs:', error);
    return NextResponse.json({ error: 'Data fetch failed' }, { status: 500 });
  }
}
