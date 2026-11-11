export interface ProjectSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectResource {
  label: string;
  url: string;
}

export interface ProjectPage {
  slug: string;
  title: string;
  date?: string;
  organization?: string;
  sections: ProjectSection[];
  skills?: string[];
  media?: ProjectMedia[];
  resources?: ProjectResource[];
}

export const projectCards = [
  { slug: 'capstone', title: 'Mechatronics Engineering Capstone' },
  { slug: 'website', title: 'Personal Website' },
  { slug: 'hyperloop', title: 'McMaster Hyperloop' },
  { slug: 'ecocar', title: 'EcoCAR3' },
  { slug: 'formulahybrid', title: 'Formula Hybrid' },
  { slug: 'strangers', title: 'Strangers' },
  { slug: 'quadsim', title: 'QuadSim' },
  { slug: 'sumobot', title: 'Sumobot' },
  { slug: 'quadcopter', title: 'Quadcopter Design' },
  { slug: 'class', title: 'Class Projects' },
  { slug: 'first', title: 'FIRST Robotics' },
  { slug: 'f1', title: 'F1 in schools' },
  { slug: 'vex', title: 'VEX Robotics' },
  { slug: 'skills', title: 'Skills Robotics' },
];

export const projectPages: ProjectPage[] = [
  {
    slug: 'capstone',
    title: 'Modern Mobility',
    date: 'Engineering Capstone',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'The primary objective of this project was the development of a sophisticated semi-autonomous medical walker. The team adapted a conventional walker to travel autonomously to a designated station when no longer needed, and to track, navigate, and return to users on request.',
          'The walker was also designed to apply its brakes when it detected sudden changes in elevation, such as steep slopes, stairs, or abrupt drops. The project aimed to enhance a conventional medical walker with intelligent features to improve mobility and user safety.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I oversaw the mechanical components of the walker and supported the team’s development and testing work. The project brought together a large interdisciplinary team.',
        ],
      },
      {
        heading: 'Goals and Challenges',
        items: [
          'Create a walker with appropriate software controls and feedback.',
          'Test the walker for strength and durability.',
          'Manage a large interdisciplinary team, work within a $600 budget, and maintain team communication.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'We allocated responsibilities early, but coordinating meetings around everyone’s schedules was difficult. In hindsight, a task coordination tool like Trello would have helped. The project concluded with an electric walker capable of autonomously navigating a room and detecting obstacles.',
        ],
      },
    ],
    skills: ['CAD', 'Rapid prototyping', 'Mechanical testing', 'Requirements engineering', 'Documentation'],
    media: [
      { src: 'CADdesign.png', alt: 'CAD design of the medical walker' },
      { src: 'wheelassembly.mp4', alt: 'Medical walker wheel assembly video' },
      { src: 'testing.mp4', alt: 'Medical walker testing video' },
    ],
  },
  {
    slug: 'website',
    title: 'My Website',
    organization: 'Personal project',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'I created a personal website to develop my web-development skills and keep track of my progress. Its goal is to showcase my contributions to projects and professional experience. This self-directed project was a rewarding way to learn front-end development.',
        ],
      },
      {
        heading: 'Goals and Challenges',
        items: [
          'Create a visually appealing site.',
          'Learn web development and Git.',
          'Explore visual design and responsive layouts.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'Building the site helped me learn a great deal about web development and create a useful way to document my portfolio. I plan to continue refining it and learning new tools.',
        ],
      },
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    media: [
      { src: 'websitescreenshot.png', alt: 'Screenshot of the personal website' },
      { src: 'websitework.png', alt: 'Work in progress on the personal website' },
    ],
  },
  {
    slug: 'hyperloop',
    title: 'Hyperloop',
    date: '2015–2016',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'After a Hyperloop white paper was released, a small group of McMaster University students decided to enter a competition organized by Texas A&M University with SpaceX and Tesla. With limited funds, we prepared a theoretical feasibility study, identified critical failure points, and investigated ways to address them.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I collaborated with students and transportation-industry professionals. When our vehicle was burglarized after we arrived in Texas for the competition, stolen laptops and passports created a serious setback. I helped maintain the team’s morale and productivity and worked with local law enforcement and the Canadian Embassy to help the team return safely to Canada.',
        ],
      },
      {
        heading: 'Goals and Challenges',
        items: [
          'Learn about mass transportation, aerospace systems, and emerging technologies.',
          'Investigate aerodynamic design and arrange funding for a competition vehicle.',
          'Recover project work and support the team after the theft of equipment and passports.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'The project was a lot of fun and provided valuable lessons. I worked with talented people in mass transportation and learned how to support a team through an unexpected crisis.',
        ],
      },
    ],
    skills: ['Mechanical design', 'Failure mode and effects analysis', 'Stress analysis', 'Material selection', 'Virtual wind-tunnel analysis'],
    media: [
      { src: 'image0.jpg', alt: 'McMaster Hyperloop project' },
      { src: 'image1.jpg', alt: 'Hyperloop vehicle design' },
      { src: 'image2.jpg', alt: 'Hyperloop project team and design' },
    ],
    resources: [{ label: 'Final design package (PDF)', url: 'McMater-Hyperloop-Final-Design.pdf' }],
  },
  {
    slug: 'ecocar',
    title: 'McMaster EcoCAR 3',
    date: '2013–2014',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'EcoCAR 3 was part of the U.S. Department of Energy Advanced Vehicle Technology Competition series, a collaboration between government, industry, and universities to explore sustainable transportation. Sixteen North American universities worked to transform a Chevrolet Camaro into a hybrid-electric vehicle over four years.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I worked on low-level vehicle software, programming Freescale processors in C#. My team prepared interface specifications and test scenarios before implementation, giving me experience with disciplined software-development practices.',
        ],
      },
      {
        heading: 'Goals and Challenges',
        items: [
          'Program the control board for a custom thermoelectric generator.',
          'Design a human-machine-interface mount for the car.',
          'Build knowledge of vehicle networks such as CAN and I²C.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'As a second-year student, I initially felt underprepared and spent time learning essential concepts such as CAN and I²C. The experience was an invaluable learning opportunity that shaped how I approached later projects.',
        ],
      },
    ],
    skills: ['Low-level programming', 'C#', 'MATLAB/Simulink', 'PCB debugging'],
    media: [
      { src: '10314570_791737187547731_7611673542938501951_n.jpg', alt: 'EcoCAR project team' },
      { src: 'freescale.png', alt: 'Freescale processor used in the project' },
      { src: 'EcoCAR3Camaro.jpg', alt: 'EcoCAR 3 Chevrolet Camaro' },
    ],
  },
  {
    slug: 'formulahybrid',
    title: 'Formula Hybrid',
    date: '2013–2014',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'The Formula Hybrid Competition challenges university teams to build efficient formula-style electric or plug-in hybrid race cars. Competitors take part in events that evaluate vehicle performance and fuel efficiency.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I worked on software for the McMaster Formula Hybrid car, developing an algorithm to detect and correct wheel slip during acceleration and braking. Filters helped reduce noise and account for the sampling limits of the vehicle’s CAN network. Because the software could not be tested adequately before the competition, the team chose not to use it to protect the driver.',
        ],
      },
      {
        heading: 'Goals and Challenges',
        items: [
          'Develop a well-performing hybrid vehicle.',
          'Understand the fundamentals of hybrid-vehicle development.',
          'Learn to contribute effectively to a large, multiyear project.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'The project taught me how larger teams are organized and how knowledge is transferred from year to year on a multiyear project.',
        ],
      },
    ],
    skills: ['PCB debugging', 'Low-level programming', 'C++', 'Soldering', 'MATLAB/Simulink'],
    media: [
      { src: 'Project Formula Hybrid.jpg', alt: 'McMaster Formula Hybrid car' },
      { src: '11061189_825147770894631_8426436439548632526_n.jpg', alt: 'Formula Hybrid project' },
      { src: 'LaunchTractionControl.PNG', alt: 'Traction-control project work' },
    ],
  },
  {
    slug: 'strangers',
    title: 'Strangers Android Application',
    date: 'November 2015',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          '“Strangers” was an Android application developed by four teammates during the HackDuke hackathon. In 24 hours, we designed an app that used Facebook, Firebase, and IBM APIs to match people based on personality traits from their recent Facebook posts, with the goal of encouraging conversations among people with different personalities.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I used IBM Watson Personality Insights to create profiles of participants’ traits, needs, and values. It was my first experience with a web API, and a mentor helped me learn the fundamentals and IBM’s security protocols.',
        ],
      },
      {
        heading: 'Future Plans',
        paragraphs: [
          'We hoped to improve the interface and branding and add a feature to block offensive content or material that violated the terms of use. The project was a social experiment to learn about interactions between people with contrasting personalities.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'The project gave me hands-on experience with Android development, JSON data, Node.js, and web APIs. We reformatted Facebook data for IBM Bluemix, used Watson to generate personality profiles, and connected matched users through Firebase messaging.',
        ],
      },
    ],
    skills: ['Web APIs', 'Android development', 'Facebook authentication', 'Watson Personality Insights'],
    media: [
      { src: 'Screen 1.png', alt: 'Strangers Android app screen' },
      { src: 'Screen 2.jpg', alt: 'Strangers Android app screen' },
      { src: 'Project Strangers.jpg', alt: 'Strangers project' },
    ],
  },
  {
    slug: 'sumobot',
    title: 'McMaster SumoBot',
    date: '2013–2015',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'The McMaster SumoBot group was established to give Mechatronics Engineering students practical experience. I participated in and helped organize the event, learning how a university club operates and how to document work for a smooth transition to future members.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'As Vice President of Parts, I created an economical parts kit for each team and coordinated with the club’s finance vice president and president to stay within budget. I researched local hardware and electronics suppliers and worked to ensure every team had quality parts to build a robot.',
        ],
      },
      {
        heading: 'Goals',
        items: ['Help every team successfully build a robot.', 'Maintain a fair competition.'],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'Working with the executive team taught me about organizing formal university events and gave me the opportunity to form lasting friendships.',
        ],
      },
    ],
    skills: ['Knowledge of local hardware vendors', 'Robot components', 'Teamwork', 'Leadership'],
    media: [
      { src: 'Project SumoBot.jpg', alt: 'McMaster SumoBot project' },
      { src: '20141107_064416.jpg', alt: 'SumoBot event' },
    ],
  },
  {
    slug: 'quadcopter',
    title: 'Quadcopter',
    date: '2014',
    organization: 'Personal project',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'I set out to design and build a quadcopter. I completed the CAD work in Autodesk Inventor and carried out some wind-tunnel testing with Autodesk Flow. The project remained unfinished because I could not manufacture some of the components.',
        ],
      },
      {
        heading: 'My Role',
        paragraphs: [
          'I defined the project scope, designed the quadcopter, sourced materials, and planned manufacturing.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'After designing the parts and acquiring materials, I realized I could not machine some components with the tools available to me. I learned to account for available manufacturing tools during the design process.',
        ],
      },
    ],
    media: [{ src: 'logo.jpg', alt: 'Quadcopter CAD design' }],
  },
  {
    slug: 'class',
    title: 'Class Projects',
    date: '2012–2014',
    organization: 'McMaster University',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'My studies at Woburn C.I. and McMaster University provided opportunities to work on engineering projects and learn how to build systems to meet specifications. These included an analog-to-digital converter and the design of internal gearing for a CD drive.',
        ],
      },
      {
        heading: 'Analog-to-Digital Converter',
        paragraphs: [
          'I designed and simulated an analog-to-digital converter using National Instruments Multisim, then built the circuit on a breadboard. A myDAQ supplied the signal and supported computer-based feedback readings.',
        ],
      },
      {
        heading: 'CD Drive',
        paragraphs: [
          'I designed and simulated mechanical parts for a CD drive using Autodesk Inventor and MapleSim. After validating the design, I made a prototype with a RepRap 3D printer and tested it, learning about modeling and simulation in MapleSim.',
        ],
      },
    ],
    media: [
      { src: 'Project Class.jpg', alt: 'Class engineering project' },
      { src: 'render.jpg', alt: 'CD drive CAD rendering' },
    ],
    resources: [
      { label: 'Analog-to-digital converter report (PDF)', url: 'Design.pdf' },
      { label: 'CD drive report (PDF)', url: 'prakhar report.pdf' },
    ],
  },
  {
    slug: 'first',
    title: 'FIRST Robotics Competition',
    date: '2009–2012',
    organization: 'Woburn C.I.',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'Founded by Dean Kamen, FIRST (For Inspiration and Recognition of Science and Technology) promotes interest in science, technology, engineering, and mathematics through international student competitions. I competed in the FIRST Tech Challenge and FIRST Robotics Competition.',
        ],
      },
      {
        heading: 'Blizzard XIII (2012)',
        paragraphs: [
          'In my senior year, my teammates and mentors appointed me team president. I coordinated sub-team and side-project progress, communicated with the team and mentors, and contributed to robot design and manufacturing. We built a sheet-metal robot, used rivets to reduce weight, and designed a fixed-hood wooden shooter. A PID feedback loop controlled flywheel speed.',
        ],
      },
      {
        heading: 'Blizzard XII (2011)',
        paragraphs: [
          'The challenge involved picking up and lifting inflatable tubes, with bonus points for deploying a mini-robot. I designed and maintained the robot’s pneumatic systems, including a shifting gearbox. The team developed a prototype and a competition robot, using testing to improve the design.',
        ],
      },
      {
        heading: 'Blizzard XI (2010)',
        paragraphs: [
          'The competition was soccer. Our robot used mecanum wheels for maneuverability and rollers to control the ball. The project taught me to choose materials carefully, account for weight limits, and plan maintenance. The team qualified for the world championships after winning the regional Chairman’s Award.',
        ],
      },
      {
        heading: 'Blizzard X (2009)',
        paragraphs: [
          'As a rookie, I learned manufacturing and robot design from senior teammates and helped oversee drivetrain manufacturing and maintenance. Our robot scored basketball-sized balls on a low-friction field. We improved traction by pulsing wheel power to alternate static and rolling friction.',
        ],
      },
    ],
    media: [
      { src: '2012robot.jpg', alt: 'Blizzard XIII robot' },
      { src: '2011robot.jpg', alt: 'Blizzard XII robot' },
      { src: '2010robot.jpg', alt: 'Blizzard XI robot' },
      { src: '2009robot.jpg', alt: 'Blizzard X robot' },
    ],
  },
  {
    slug: 'f1',
    title: 'F1 in Schools',
    date: '2010–2012',
    organization: 'Woburn C.I.',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'I joined the only collaborative team at the regional competition, bringing students from different schools together. Coordinating meetings and sharing progress was difficult, so the team divided responsibilities among manufacturing, marketing, and outreach while collaborating on the car design.',
        ],
      },
      {
        heading: 'Design',
        paragraphs: [
          'The car was modeled with a larger body inspired by the Boxy Fish, which has a low drag coefficient. The body shape was designed to reduce the low-pressure zone behind the car, with an opening underneath to reduce it further.',
        ],
      },
    ],
    media: [{ src: 'image057.gif', alt: 'F1 in Schools car design and analysis' }],
    resources: [{ label: 'Velocita Racing website', url: 'https://velocitaracing.weebly.com/' }],
  },
  {
    slug: 'vex',
    title: 'VEX Robotics Competition',
    date: '2008–2012',
    organization: 'Woburn C.I.',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'VEX competitions helped me develop my understanding of mechanical systems. The kit’s structural components were useful for proof-of-concept models, and competitions taught me about structural support and reducing inefficiency. I competed from 2008 to 2012 and mentored younger students in building robust machines.',
        ],
      },
      {
        heading: 'Design Lessons',
        items: [
          'Triangle bracing helped prevent the frame from flexing under heavy loads.',
          'Unsupported drive shafts could bend under heavy loads.',
          'Adding a second beam and additional gearing reduced shear stress and torsion.',
          'Greased, well-aligned gearboxes reduced friction and energy loss.',
          'Reducing the number of gears and using a central conical frame reduced friction and strain.',
        ],
      },
    ],
    media: [
      { src: 'image046.jpg', alt: 'VEX robot frame with triangle bracing', caption: 'Triangle bracing reinforced the frame.' },
      { src: 'image047.jpg', alt: 'VEX robot drive shaft', caption: 'Unsupported drive shafts could bend under heavy loads.' },
      { src: 'image048.jpg', alt: 'VEX robot with additional support beams', caption: 'An added beam and gearing reduced stress and torsion.' },
      { src: 'image049.jpg', alt: 'VEX robot gearbox', caption: 'Aligned, lubricated gearboxes helped reduce friction.' },
      { src: 'image050.jpg', alt: 'Completed VEX robot design', caption: 'The final design reduced gears and supported the pickup assembly.' },
    ],
  },
  {
    slug: 'skills',
    title: 'Skills Robotics Competition',
    date: '2010–2011',
    organization: 'Woburn C.I.',
    sections: [
      {
        heading: 'Project Description',
        paragraphs: [
          'The Ontario Skills Robotics Competition encouraged student interest in skilled trades and robotics. The challenge was to score balls into a net behind an opposing robot. Building on a similar competition in 2009, my team designed around a smaller budget and used old DeWalt drills instead of high-power CIM motors.',
          'We used a double-wheel shooter to send balls straight ahead and make aiming easier. Each roller had its own drive, keeping the assembly simple and allowing the robot to eject balls if one motor failed.',
        ],
      },
      {
        heading: 'Reflection',
        paragraphs: [
          'The robot was fast and could quickly collect and score balls. When a plywood wheel cracked during the competition, we repaired it with wood glue. We learned to allocate more budget to the drive system; the shooter design still allowed the robot to score from across the field while repairs were underway.',
        ],
      },
    ],
    media: [
      { src: 'image052.jpg', alt: 'Skills Robotics robot design' },
      { src: 'image053.jpg', alt: 'Completed Skills Robotics robot' },
    ],
  },
];
