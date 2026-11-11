export interface EducationPage {
  slug: string;
  title: string;
  institution: string;
  program?: string;
  summary: string;
  logo: string;
  logoAlt: string;
  overview: string;
  courses: string[];
  topics: string[];
  image?: string;
  imageAlt?: string;
  links?: { label: string; url: string }[];
}

export const educationPages: EducationPage[] = [
  {
    slug: 'masters',
    title: 'Master of Applied Science',
    institution: 'McMaster University',
    program: 'Estimation, Tracking and Fusion Lab',
    summary: 'Graduate research focused on tracking dismounts using feature-matrix-based motion segmentation.',
    logo: '/assets/education/masters.jpg',
    logoAlt: 'McMaster University logo',
    overview:
      'I completed a Master of Applied Science at McMaster University, specializing in the Estimation, Tracking and Fusion Lab. My supervisors, Dr. Kirubarajan and Dr. Tharmarasa, helped me develop my research skills and complete my thesis.',
    courses: ['State Estimation', 'Radar Systems', 'Target Tracking and Fusion', 'Optimisation'],
    topics: ['Submarine Detection', 'Quantum Computing', 'Machine Learning', 'Small Target Detection'],
    image: '/assets/education/masters-team.jpg',
    imageAlt: 'Members of the Estimation, Tracking and Fusion Lab',
    links: [
      { label: 'Dr. Kirubarajan', url: 'https://www.ece.mcmaster.ca/~kiruba/' },
      { label: 'Dr. Tharmarasa', url: 'https://www.ece.mcmaster.ca/~thamas/' },
      {
        label: 'Thesis: Tracking Dismounts With Feature Matrix Based Multi-scale Intrinsic Motion Segmentation Framework (FM-MIMS)',
        url: 'http://hdl.handle.net/11375/27329',
      },
    ],
  },
  {
    slug: 'bachelors',
    title: 'Bachelor of Engineering',
    institution: 'McMaster University',
    program: 'Mechatronics Engineering with Management and Co-op',
    summary: 'An interdisciplinary engineering program combining mechatronics, management, and co-op experience.',
    logo: '/assets/education/bachelors.jpg',
    logoAlt: 'McMaster University logo',
    overview:
      'I completed a Bachelor of Engineering in Mechatronics Engineering with Management and co-op. The program gave me opportunities to learn about the integration of engineering disciplines and apply that learning through projects.',
    courses: [
      'Mechatronics Capstone',
      'Distributed Systems',
      'Product Development',
      'Engineering Ethics',
      'Management of High Tech Firms',
    ],
    topics: ['Hybrid Vehicles', 'FPGAs', 'Mechatronic Systems', 'Documentation'],
  },
  {
    slug: 'webdesign',
    title: 'Web Development',
    institution: 'Ryerson Chang School',
    program: 'Continuing education courses',
    summary: 'Evening courses in web design taken during a co-op summer to learn from professional developers.',
    logo: '/assets/education/webdesign.jpg',
    logoAlt: 'Web development education logo',
    overview:
      'During a co-op summer, I took evening courses at Ryerson Chang School to learn the fundamentals of web design. Learning in a classroom helped me understand how web technologies work and how they are interpreted by browsers.',
    courses: ['Introduction to Web Design'],
    topics: ['HTML5', 'CSS', 'JavaScript', 'Design'],
  },
  {
    slug: 'highschool',
    title: 'High School Diploma',
    institution: 'High School',
    summary: 'Explored engineering, technology, business, and other interests through courses and extracurricular activities.',
    logo: '/assets/education/highschool.jpg',
    logoAlt: 'High school education logo',
    overview:
      'High school was a place to explore a range of interests and learn about different industries and opportunities.',
    courses: [
      'Introduction to Pneumatics',
      'Computer Engineering',
      'Introduction to Business',
      'Choir',
    ],
    topics: ['Robotics', 'Business', 'Finance', 'Manufacturing'],
  },
];
