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

export interface FetchDataResponse {
  programs: ProgramType[];
  mentors: UserType[];
  reviews: ReviewType[];
}
