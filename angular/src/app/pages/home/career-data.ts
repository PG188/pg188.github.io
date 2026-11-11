export interface CareerPage {
  slug: string;
  role: string;
  company: string;
  date: string;
  startYear: number;
  summary: string;
  logo: string;
  logoAlt: string;
  responsibilities: string[];
  skills: string[];
  goals: string[];
  reflection: string;
}

export const careerPages: CareerPage[] = [
  {
    slug: 'palantir',
    role: 'Software Engineer',
    company: 'Palantir Technologies',
    date: 'April 2025 – Present',
    startYear: 2025,
    summary: 'Building software for sensor fusion, tracking, geospatial intelligence, and operational decision support.',
    logo: '/assets/career/palantir.jpg',
    logoAlt: 'Palantir Technologies logo',
    responsibilities: [
      'Develop and maintain sensor-fusion, multi-target tracking, and trajectory-prediction software for aerospace and maritime operations.',
      'Build distributed software with C++, Python, and Rust, integrated with Palantir Foundry and Gotham.',
      'Combine sensor feeds, geospatial intelligence, and operational data into real-time situational-awareness products.',
      'Use Gaia mapping services and geospatial analytics to support operational planning and field deployments.',
      'Work with customers and engineering teams to validate software in operational field environments.',
      'Support software capabilities from development through operational testing and customer demonstrations.',
      'Contribute to reliable software for defense and aerospace mission planning and decision support.',
    ],
    skills: [
      'C++, Python, and Rust',
      'Distributed software systems',
      'Geospatial analytics',
      'Sensor fusion and multi-target tracking',
      'Mission-planning workflows',
      'Customer-facing engineering',
    ],
    goals: [
      'Deliver reliable software for high-stakes aerospace and defense missions.',
      'Move capabilities from development into operational testing.',
      'Provide customers with robust, field-ready solutions.',
    ],
    reflection:
      'Working at Palantir has been an opportunity to contribute to software that supports complex operational decisions in aerospace and maritime domains. Combining sensor fusion, geospatial intelligence, and distributed systems is technically demanding and meaningful. The experience has strengthened my ability to work across engineering and customer teams in fast-moving, mission-critical environments.',
  },
  {
    slug: 'l3',
    role: 'Algorithm Developer',
    company: 'L3Harris WESCAM',
    date: '2020–2025',
    startYear: 2020,
    summary: 'Developed computer-vision, target-tracking, and state-estimation algorithms for electro-optical systems.',
    logo: '/assets/career/l3.png',
    logoAlt: 'L3Harris logo',
    responsibilities: [
      'Researched, implemented, and evaluated algorithms for embedded camera-based computer vision, including object detection, target tracking, sensor fusion, and state estimation.',
      'Applied machine-learning models to improve tracking precision during irregular camera operation.',
      'Tested user-interface updates against customer requirements and analyzed data from real-world flight tests.',
      'Worked with McMaster University on research into small-target detection and tracking.',
      'Collaborated with the MX-GCS team on features for future electro-optical and infrared systems.',
      'Built a radiometrically realistic synthetic-data generator to reduce field-image collection time.',
      'Developed a target-detection algorithm using computer vision, machine learning, and pixel-wise image processing.',
    ],
    skills: [
      'Multiple-target tracking',
      'Sensor fusion and state estimation',
      'MATLAB and digital image processing',
      'Object detection',
      'Machine learning',
      'Flight-test data analysis',
    ],
    goals: [
      'Reliably detect defined targets while minimizing false alarms.',
      'Test and report the effectiveness of image filters.',
      'Document the software development process.',
    ],
    reflection:
      'Working at WESCAM was exciting and challenging. The pandemic meant that much of my onboarding and troubleshooting happened remotely. In the advanced processing group, I worked on research and development with limited access to protected data and evolving requirements. This pushed me to deepen my understanding of concepts from my master’s studies and gave me a useful perspective on how development security differs between organizations.',
  },
  {
    slug: 'gdms',
    role: 'Software Developer - Co-op',
    company: 'General Dynamics Mission Systems Canada',
    date: '2019',
    startYear: 2019,
    summary: 'Worked on critical software for a Canadian surveillance aircraft, with a focus on secure development and documentation.',
    logo: '/assets/career/gdms.jpg',
    logoAlt: 'General Dynamics logo',
    responsibilities: [
      'Collaborated with the Block 3 team on the CP-140 Aurora project.',
      'Built a tool to communicate automated test results and sprint summaries to the team.',
      'Researched and implemented an attitude-interpolation algorithm to optimize bandwidth usage.',
      'Created Python and Robot Framework tests to verify MX-20 laser range finder altitude measurements.',
    ],
    skills: ['Robot Framework', 'Ada', 'Interpolation algorithms', 'Web development', 'Automated testing'],
    goals: [
      'Deliver a clear, easy-to-read test dashboard.',
      'Help develop successful test algorithms.',
      'Follow secure development and documentation practices.',
    ],
    reflection:
      'My co-op at General Dynamics was an intriguing introduction to aerospace software. I joined a motivated team maintaining critical code for a Canadian surveillance aircraft. Working with controlled goods showed me the importance of security protocols and careful documentation, especially when software changes can affect a product for decades.',
  },
  {
    slug: 'mcmaster-ta',
    role: 'Teaching Assistant',
    company: 'McMaster University',
    date: '2018–2020',
    startYear: 2018,
    summary: 'Led labs and tutorials, mentored students, and supported course instruction and assessment.',
    logo: '/assets/career/mcmaster.jpg',
    logoAlt: 'McMaster University logo',
    responsibilities: [
      'Led lab sessions and tutorials, demonstrating course concepts and laboratory techniques.',
      'Mentored students and provided individual help with programming and lab work.',
      'Coordinated tutorial material with other teaching assistants and instructors.',
      'Graded assignments, tests, and exams, and calculated and submitted final grades.',
      'Maintained course records and supported students with course-related concerns.',
      'Operated and troubleshot laboratory equipment, escalating repairs when needed.',
    ],
    skills: [
      'Communication and organization',
      'FPGA programming',
      'C++ and Java',
      'Control systems',
      'Digital and analog logic',
      'Instruction and mentoring',
    ],
    goals: [
      'Help students understand the course material and appreciate its importance.',
      'Maintain an inclusive, engaging learning environment.',
      'Grade consistently and support academic integrity.',
    ],
    reflection:
      'I enjoyed teaching and helping students master new concepts. Preparing to answer their questions also strengthened my own understanding. Grading was demanding, but it helped me develop attention to detail. Overall, being a teaching assistant was an invaluable learning experience.',
  },
  {
    slug: 'mcmaster-ra',
    role: 'Research Assistant',
    company: 'McMaster University',
    date: '2018',
    startYear: 2018,
    summary: 'Contributed to research in the Estimation, Tracking and Fusion lab and learned from its research team.',
    logo: '/assets/career/mcmaster.jpg',
    logoAlt: 'McMaster University logo',
    responsibilities: [
      'Helped develop a sensor-fusion platform for the Estimation, Tracking and Fusion Lab.',
      'Designed and implemented a MongoDB NoSQL database with Node.js.',
      'Tested web-based tracking software that was under active development.',
    ],
    skills: [
      'C++ and MATLAB',
      'Machine learning',
      'Video tracking and sensor fusion',
      'NoSQL databases',
      'MongoDB and Node.js',
    ],
    goals: [
      'Build an understanding of how research is conducted.',
      'Explore state estimation, target tracking, and sensor fusion.',
    ],
    reflection:
      'This experience was an enlightening introduction to research and a prelude to my master’s studies. I learned from talented people in the lab and gained useful insight into industry research interests through conversations with project sponsors.',
  },
  {
    slug: 'mcmaster-spa',
    role: 'Special Projects Assistant',
    company: 'McMaster University',
    date: '2016–2023',
    startYear: 2016,
    summary: 'Coordinated engineering outreach events and a district robotics competition with more than 1,200 students.',
    logo: '/assets/career/mcmaster.jpg',
    logoAlt: 'McMaster University logo',
    responsibilities: [
      'Partnered with the Engineering Dean’s Office on planning and logistics for major outreach events.',
      'Coordinated a district-level robotics competition for more than 1,200 high-school participants.',
      'Worked with McMaster University and FIRST Robotics staff to coordinate event resources and operations.',
      'Organized preparation meetings and recruited, trained, and managed volunteers and judges.',
      'Served as a liaison between McMaster and FIRST Robotics during the event.',
      'Led post-event debriefs and documented improvements for future events.',
    ],
    skills: ['Event planning', 'Organization and communication', 'Resource allocation', 'Volunteer coordination', 'Stakeholder management'],
    goals: [
      'Run engaging events without logistical issues.',
      'Meet the needs of participants and other stakeholders.',
    ],
    reflection:
      'I enjoyed working with a talented team and had the opportunity to develop networking, communication, and management skills. Coordinating stakeholders with different priorities could be challenging, and it required creative, diplomatic solutions. I appreciated the opportunity to contribute ideas and help shape these events.',
  },
  {
    slug: 'thales',
    role: 'Software Developer - Co-op',
    company: 'Thales Canada',
    date: '2016–2017',
    startYear: 2016,
    summary: 'Improved automated testing and developer workflows, including regression tests and code-quality tools.',
    logo: '/assets/career/thales.jpg',
    logoAlt: 'Thales logo',
    responsibilities: [
      'Helped reduce system testing time by 80% through improvements to testing workflows.',
      'Debugged C++ full-system regression-testing software.',
      'Trained the Validation and Verification team to use testing software.',
      'Worked across teams to introduce Jenkins and SonarQube for automated code checks.',
      'Built a user-friendly script-development environment for automated tests.',
      'Introduced Git revision-control practices to the team.',
    ],
    skills: [
      'C++ and JavaScript troubleshooting',
      'Software testing and automation',
      'Jenkins and SonarQube',
      'Git version control',
      'User-experience design',
      'Communication and organization',
    ],
    goals: [
      'Complete assigned work on time and manage competing deadlines.',
      'Create an intuitive user experience for test automation.',
    ],
    reflection:
      'As part of the Research and Development department, I contributed to a project that substantially shortened system testing time. I also supported regression testing, trained colleagues, and helped introduce automated code checks and version control. The role gave me insight into how a large organization starts new software projects and maintains existing systems.',
  },
  {
    slug: 'capreit',
    role: 'Summer IT Support Student',
    company: 'CAPREIT',
    date: '2013–2014',
    startYear: 2013,
    summary: 'Supported IT operations by troubleshooting computers and printers and assisting users across regional sites.',
    logo: '/assets/career/capreit.jpg',
    logoAlt: 'CAPREIT logo',
    responsibilities: [
      'Prepared meeting rooms and conference technology for a smooth user experience.',
      'Tracked laptop and desktop inventory and maintained accurate records.',
      'Imaged and configured PCs and laptops.',
      'Helped coordinate a nationwide hardware upgrade across regional rental offices.',
      'Troubleshot printer issues and assisted head-office users with supplies.',
      'Responded to help-desk requests and prioritized work to meet deadlines.',
    ],
    skills: ['PC support', 'Hardware imaging and configuration', 'Inventory management', 'Troubleshooting', 'Customer service', 'Task prioritization'],
    goals: [
      'Complete assigned tasks on time.',
      'Balance competing support requests and deadlines.',
    ],
    reflection:
      'I supported the IT team with computer and printer repairs, disposal of outdated equipment, and upgrades at regional sites. Helping users over the phone was a notable part of the role and strengthened my confidence and communication skills when assisting people I had not met before.',
  },
  {
    slug: 'ctw',
    role: 'Camp Instructor',
    company: "Children's Technology Workshop",
    date: '2012–2013',
    startYear: 2012,
    summary: 'Introduced young students to robotics, engineering, animation, and game design.',
    logo: '/assets/career/ctw.jpg',
    logoAlt: "Children's Technology Workshop logo",
    responsibilities: [
      'Taught children ages 7–13 to design task-oriented robots using LEGO Mindstorms.',
      'Guided students through animation, graphic art, and presentation projects.',
      'Encouraged students to explore game design and solve technical challenges.',
      'Communicated student progress and concerns with parents and caregivers.',
      'Maintained a safe environment and responded appropriately to incidents.',
    ],
    skills: ['Robotics instruction', 'Technology troubleshooting', 'Teaching and mentorship', 'Communication', 'Safety and supervision'],
    goals: [
      'Adapt activities to students with different interests and abilities.',
      'Keep students safe and engaged while managing daily activities.',
    ],
    reflection:
      'This was my first full-time summer job and taught me responsibility, communication, and leadership. Teaching children helped me become more patient and adaptable, while communicating with parents helped me build confidence and trust. The most rewarding part was sharing my interest in robotics and engineering and helping students develop curiosity and problem-solving skills.',
  },
  {
    slug: 'torontostar',
    role: 'Sales',
    company: 'Toronto Star',
    date: '2009',
    startYear: 2009,
    summary: 'Built communication skills and resilience while selling newspaper subscriptions door to door.',
    logo: '/assets/career/torontostar.jpg',
    logoAlt: 'Toronto Star logo',
    responsibilities: [
      'Prospected neighborhoods and generated leads for newspaper subscriptions.',
      'Presented subscription benefits to prospective customers.',
      'Recorded sales activity, customer interactions, and subscription details.',
      'Followed company policies and ethical practices when working with customers and their information.',
    ],
    skills: ['Sales and prospecting', 'Persuasive communication', 'Customer service', 'Record keeping', 'Self-motivation'],
    goals: ['Aim to sell at least one new subscription each day.'],
    reflection:
      'Going door to door to sell subscriptions was physically and mentally demanding. The experience tested my sales skills and helped me become more outgoing and resilient.',
  },
];
