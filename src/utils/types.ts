export interface ProgramType {
  title: string;
  dateTime: string | null;
  createdAt: string | null;
  location: string | null;
  description: string | null;
  cost: number;
  programId: string;
  thumbnailUrl: string;
  status: 'New' | 'Sales' | null;
}

export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  careerGoal: string | null;
  photoUrl: string | null;
  linkedInUrl: string | null;
  userId: string;
  industryId: string;
  industryTitle: string;
  userTypeId: string;
}

export interface ReviewType {
  content: string;
  rating: number;
  reviewId: string;
  programId: string;
  reviewerId: string;
  firstName: string;
  lastName: string;
  photoUrl: string | null;
  industryId: string;
  industryTitle: string;
}

export interface LandingPageDataResponse {
  programs: ProgramType[];
  mentors: UserType[];
  reviews: ReviewType[];
}

export interface Stats {
  weeklyNewUsers: number;
  currentMonthlyNewUsers: number;
  totalUsers: number;
  growthRate: string;
}

export interface PopularMentors {
  userid: string;
  photourl: string;
  fullname: string;
  industry: string;
  matching_count: number;
  feedback_count: number;
}

export interface PopularProgram {
  programid: string;
  program_title: string;
  topic: string;
  mentor: string;
  mentor_photo: string;
  cost: number;
  accumulated_sales_count: number;
  accumulated_sales_amount: string;
}

export interface TopicParticipation {
  topic: string;
  participation_count: number;
  participation_rate: string;
}

export interface IndustryParticipation {
  industry: string;
  participation_count: number;
  participation_rate: string;
}

export interface MonthlyInflowData {
  month: string;
  new_users: number;
  new_programs: number;
  new_sessions: number;
}

export interface MonthlySalesData {
  month: string;
  totalSales: number;
  companyProfit: number;
  freeParticipationCount: number;
}

export interface DashboardDataResponse {
  stats: Stats;
  popularMentors: PopularMentors[];
  popularPrograms: PopularProgram[];
  totalParticipationCount: number;
  topicParticipation: TopicParticipation[];
  industryParticipation: IndustryParticipation[];
  year: number;
  monthlyInflowData: MonthlyInflowData[];
  monthlySalesData: MonthlySalesData[];
}
