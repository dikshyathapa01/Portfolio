export interface Skill {
  name: string;
  category: string;
  proficiency?: 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  type: 'education' | 'course' | 'workshop' | 'hackathon';
  title: string;
  organization: string;
  period?: string;
  skills?: string[];
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  cv?: string;
  phone: string;
  location: string;
}

export const skills: Skill[] = [
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 'Expert' },
  { name: 'Express.js', category: 'Backend', proficiency: 'Advanced' },
  { name: 'NestJS', category: 'Backend', proficiency: 'Advanced' },
  { name: 'TypeScript', category: 'Backend', proficiency: 'Advanced' },
  { name: 'JavaScript', category: 'Backend', proficiency: 'Advanced' },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 'Advanced' },

  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 'Beginner' },
  { name: 'HTML', category: 'Frontend', proficiency: 'Advanced' },
  { name: 'CSS', category: 'Frontend', proficiency: 'Advanced' },

  // Tools & Others
  { name: 'Git', category: 'Tools', proficiency: 'Advanced' },
  { name: 'REST APIs', category: 'Tools', proficiency: 'Advanced' },
  { name: 'Database Design', category: 'Tools', proficiency: 'Advanced' },
  { name: 'Authentication', category: 'Tools', proficiency: 'Advanced' },
  { name: 'CRUD Operations', category: 'Tools', proficiency: 'Advanced' },
];

export const projects: Project[] = [
  {
    id: 'library-management',
    title: 'Library Management System',
    shortDescription: 'A backend-focused library platform with member and borrow-return workflows.',
    description:
      'Built a complete library management backend with authentication, role-based access, book inventory, member records, and borrow-return tracking. Focused on clean architecture, modular API design, and reliable PostgreSQL data handling.',
    technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Authentication', 'CRUD Operations'],
    githubUrl: 'https://github.com/dikshyathapa01',
    featured: false,
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    shortDescription: 'Scalable ecommerce API with media upload and modular NestJS architecture.',
    description:
      'Developed an ecommerce backend using NestJS with TypeScript, PostgreSQL, and TypeORM-style modular service patterns. Added file handling for product media with Multer and Cloudinary integration to support production-ready image workflows.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'TypeORM', 'JWT Authentication', 'Swagger', 'Multer', 'Cloudinary'],
    githubUrl: 'https://github.com/dikshyathapa01/Ecommere',
    featured: true,
  }
];


export const contactInfo: ContactInfo = {
  email: 'dikshyatha4258@gmail.com',
  github: 'https://github.com/dikshyathapa01',
  linkedin: 'https://www.linkedin.com/in/dikshya-thapa-31370135a',
  cv: '/DT cv.pdf',
  phone: '+977-9861133240',
  location: 'Banepa, Kavre, Nepal',
};

export const portfolio = {
  name: 'Dikshya Thapa',
  title: 'Backend Developer',
  subtitle: 'Building scalable server-side applications',
  bio: 'Backend Developer skilled in Node.js and NestJS for building structured and scalable server-side applications. Experienced in developing RESTful APIs, implementing authentication, handling CRUD operations, and integrating relational databases. Strong foundation in data structures and backend architecture principles, with a focus on clean and maintainable code.',
  shortBio:
    'Backend developer passionate about creating efficient, scalable applications with Node.js and NestJS.',
  interests: [
    'Backend Development',
    'RESTful APIs',
    'Database Design'
  ],
};