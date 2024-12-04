import { DashboardDataResponse, LandingPageDataResponse } from './types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function fetchLandingPageData(): Promise<LandingPageDataResponse | null> {
  const res = await fetch(`${baseUrl}/landing_page/supabase/`);

  const data = await res.json();
  return data as LandingPageDataResponse;
}

// Dashboard 데이터 가져오기
export async function fetchDashboardData(): Promise<DashboardDataResponse | null> {
  try {
    const res = await fetch(`${baseUrl}/dashboard/dashboard_api_design/`);

    if (!res.ok) {
      console.error('Failed to fetch dashboard data');
      return null;
    }

    const data = await res.json();
    return data as DashboardDataResponse;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return null;
  }
}
