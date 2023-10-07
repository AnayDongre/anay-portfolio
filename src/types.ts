export interface NavButtonInterface {
  id: number;
  name: string;
}

export interface ExperienceInterface {
  id: number;
  timeline: string;
  role: string;
  company?: string;
  description: string;
  skills: string[];
}
