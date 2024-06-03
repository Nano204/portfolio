import { AcademicDetails } from './academic-details/models';
import { ExperienceDetails, Technologies } from './experience-details/models';

export const experienceDetails: ExperienceDetails[] = [
  {
    startDate: 1696136400000,
    finalDate: 0,
    role: 'Development Engineer',
    company: 'Jalasoft',
    description:
      'VCloud Email - An application that enable users to manage their email security settings and track email-related metrics through dashboards. This application that leverages micro-frontends as its primary components.',
    stack: [
      Technologies.TYPESCRIPT,
      Technologies.ANGULAR,
      Technologies.BOOSTRAP,
      Technologies.GIT,
      Technologies.BAMBOO,
      Technologies.VERACODE,
      Technologies.AWS,
      Technologies.BITBUCKET,
      Technologies.JIRA,
    ],
  },
  {
    startDate: 1677646800000,
    finalDate: 1696136400000,
    role: 'Development Engineer',
    company: 'Jalasoft',
    description:
      'Forms and workflows - A web application that supports the creation of forms and workflows using Graphology, with the fundamental purpose of enhancing process monitoring efficiently.',
    stack: [
      Technologies.TYPESCRIPT,
      Technologies.ANGULAR,
      Technologies.NODEJS,
      Technologies.EXPRESS,
      Technologies.TAILWIND,
      Technologies.INVERSIFY,
      Technologies.SWAGGER,
      Technologies.GIT,
      Technologies.GITLAB,
      Technologies.KEYCLOAK,
    ],
  },
  {
    startDate: 1667278800000,
    finalDate: 1677646800000,
    role: 'Jala University Bootcamper',
    company: 'Jala University',
    description:
      'Service selling platform - A social network that connects service providers with users through features like virtual rooms for meetings or classes, real-time chat, provider rating system, service search, dynamic filters, tracking of contracted services, and payments.',
    stack: [
      Technologies.TYPESCRIPT,
      Technologies.ANGULAR,
      Technologies.NODEJS,
      Technologies.EXPRESS,
      Technologies.AWS,
      Technologies.TAILWIND,
      Technologies.INVERSIFY,
      Technologies.SWAGGER,
      Technologies.GIT,
      Technologies.GITLAB,
      Technologies.TRELLO,
      Technologies.ELASTICSEARCH,
    ],
  },
];

export const academicDetails: AcademicDetails[] = [
  {
    startDate: 1265000400000,
    finalDate: 1430456400000,
    course: 'Engineer\'s degree, Civil Engineering',
    institution: 'Pontificia Universidad Javeriana Cali',
  },
  {
    finalDate: 1716354000000,
    course: 'Application Security for Developers and DevOps Professionals',
    institution: 'IBM',
  },
  {
    finalDate: 1712120400000,
    course: 'Cyber Security Fundamentals',
    institution: 'University of London',
  },
  {
    startDate: 1679720400000,
    finalDate: 1690434000000,
    course: 'Software Design and Architecture Specialization',
    institution: 'University of Alberta',
  },
  {
    startDate: 1685595600000,
    finalDate: 1690434000000,
    course: 'Service-Oriented Architecture',
    institution: 'University of Alberta',
  },
  {
    startDate: 1680670800000,
    finalDate: 1685595600000,
    course: 'Software Architecture',
    institution: 'University of Alberta',
  },
  {
    startDate: 1679720400000,
    finalDate: 1681362000000,
    course: 'Design Patterns',
    institution: 'University of Alberta',
  },
  {
    startDate: 1681362000000,
    finalDate: 1680670800000,
    course: 'Object-Oriented Design',
    institution: 'University of Alberta',
  },
];
