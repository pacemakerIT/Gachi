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
  password: string | null;
  careerGoal: string | null;
  photoUrl: string | null;
  linkedInUrl: string | null;
  userId: string;
  industryId: string;
  userTypeId: string;
  Industry: IndustryType;
}

export interface ReviewType {
  content: string;
  rating: number;
  reviewId: string;
  programId: string;
  reviewerId: string;
  User: UserType;
}

export interface IndustryType {
  industryId: string;
  title: string;
}

export interface FetchDataResponse {
  programs: ProgramType[];
  users: UserType[];
  reviews: ReviewType[];
}
