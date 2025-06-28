// types/index.ts

// User types
export interface User {
  id: string;
  email: string;
  role: "parent" | "nanny";
  profile: UserProfile;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone?: string;
  city: string;
  postalCode: string;
  avatar?: string;
}

// Parent specific
export interface Parent extends User {
  role: "parent";
  children: Child[];
  preferences: ParentPreferences;
}

export interface Child {
  id: string;
  name: string;
  birthDate: Date;
  age: number;
  specialNeeds?: string[];
}

export interface ParentPreferences {
  schedule: TimeSlot[];
  maxDistance: number; // km
  budgetRange: [number, number]; // €/hour
  priorities: string[];
  languages?: string[];
}

// Nanny specific
export interface Nanny extends User {
  role: "nanny";
  experience: number; // years
  hourlyRate: number;
  availability: TimeSlot[];
  certifications: string[];
  description: string;
  photos: string[];
  reviews: Review[];
  averageRating: number;
}

// Matching
export interface Match {
  id: string;
  parentId: string;
  nannyId: string;
  compatibilityScore: number;
  factors: CompatibilityFactor[];
  status: "pending" | "accepted" | "rejected" | "contacted";
  createdAt: Date;
}

export interface CompatibilityFactor {
  category: string;
  score: number;
  weight: number;
  reason: string;
}

// Common
export interface TimeSlot {
  dayOfWeek: number; // 0-6 (Monday = 1)
  startTime: string; // "08:00"
  endTime: string; // "18:00"
}

export interface Review {
  id: string;
  authorId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

// Forms
export interface SearchForm {
  location: {
    city: string;
    postalCode: string;
  };
  schedule: TimeSlot[];
  budget: [number, number];
  childrenAges: number[];
  priorities: string[];
  urgency: "asap" | "next_week" | "next_month" | "flexible";
}

// API responses
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
