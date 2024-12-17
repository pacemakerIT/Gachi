import { DashboardDataResponse, LandingPageDataResponse } from './types';

// baseUrl을 환경 변수에서 가져오기
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseUrl) {
  console.error('BASE URL is not defined in the environment variables.');
}

// Landing Page 데이터 가져오기
export async function fetchLandingPageData(): Promise<LandingPageDataResponse | null> {
  try {
    const res = await fetch(`${baseUrl}/landing_page/supabase/`, {
      // cache: 'no-store',
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
    const res = await fetch(`${baseUrl}/dashboard/dashboard_api_design/`, {
      // cache: 'no-store',
    });

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
