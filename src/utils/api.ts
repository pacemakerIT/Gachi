import { LandingPageDataResponse } from './types';

export async function fetchLandingPageData(): Promise<LandingPageDataResponse | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/landing_page/supabase/`);

  const data = await res.json();
  return data as LandingPageDataResponse;
}
