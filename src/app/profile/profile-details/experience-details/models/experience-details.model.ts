import { Technologies } from './technologies.enum';

export interface ExperienceDetails {
  startDate: number;
  finalDate: number;
  role: string;
  company: string;
  description: string;
  stack: Technologies[];
}
