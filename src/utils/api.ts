import { FetchDataResponse } from './types';

export async function fetchData(): Promise<FetchDataResponse> {
  const res = await fetch(
    'http://127.0.0.1:8000/landing_page/landing-page-supabase/',
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  const data = await res.json();
  return data as FetchDataResponse;
}
