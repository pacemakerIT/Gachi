import { LandingPageDataResponse, DashboardDataResponse } from './types';

export async function fetchLandingPageData(): Promise<LandingPageDataResponse | null> {
  try {
    const res = await fetch('http://127.0.0.1:8000/landing_page/supabase/', {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('Failed to fetch landing page data');
      return null;
    }

    const data = await res.json();
    return data as LandingPageDataResponse;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}

// Dashboard 데이터 가져오기
export async function fetchDashboardData(): Promise<DashboardDataResponse | null> {
  try {
    const res = await fetch(
      'http://127.0.0.1:8000/dashboard/dashboard_api_design/',
      {
        cache: 'no-store',
      }
    );

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
