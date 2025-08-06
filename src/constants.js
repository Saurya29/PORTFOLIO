// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import PyTorchLogo from './assets/tech_logo/pytorch.png';
import tensorflowLogo from './assets/tech_logo/tf.png';
import scikitLearnLogo from './assets/tech_logo/scikit-logo.png';
import kerasLogo from './assets/tech_logo/keras-logo.png';


// Achievement Section Logo's
import dsalogo from './assets/company_logo/dsa.png';
import cricketlogo from './assets/company_logo/cricket.png';

// Education Section Logo's
import davLogo from './assets/education_logo/dav.png';
import jvmLogo from './assets/education_logo/jvm.png';
import bitLogo from './assets/education_logo/bit.png';

// Project Section Logo's
import IntelliLiftLogo from './assets/work_logo/IntelliLift.png';
import LinkupLogo from './assets/work_logo/Linkup.png';
import RecommendationLogo from './assets/work_logo/recommendation.png';

// Experience section Logo's



export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
    
      { name: 'Python', logo: pythonLogo },

      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },

      { name: 'Vercel', logo: vercelLogo },

    ],
  },
  {
    title: 'Machine Learning',
    skills: [
      { name: 'PyTorch', logo: PyTorchLogo },
      { name: 'TensorFlow', logo: tensorflowLogo },
      { name: 'Scikit-Learn', logo: scikitLearnLogo },
      { name: 'Keras', logo: kerasLogo },

     

    ],
  },
  {
  title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },



      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      
    
    ],
  },
    {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },

    ],
  },
];



  export const experiences  = [
    {
      id: 0,
      img: dsalogo,
      role: "Solved 200+ DSA Problems",
      
      
     
      },
      
    {
      id: 1,
      img: cricketlogo,
      role: "Represented BIT Mesra in Inter-Technical Cricket Tournament and secured 1st Position",
      
    },
    {
      id: 2,
      img: cricketlogo,
      role:"Participated in IIT Roorkee's sports fest Sangram as a part of BIT Mesra Cricket Team",
     
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bitLogo,
      school: "Birla Institute of Technology, Ranchi",
      date: "Nov 2022 - May 2026",
      grade: "7.42 CGPA",
      desc: "I am pursuing my Bachelor's degree (B.Tech) in Artificial Intelligence and Machine Learning from BIT Mesra, Ranchi. At BIT, I have gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Artificial Intelligence, and Machine Learning. I have actively participated in various workshops and technical events, which have enhanced my skills and knowledge. My experience at BIT Mesra has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech (Artificial Intelligence and Machine Learning)",
    },
    {
      id: 1,
      img: jvmLogo,
      school: "JVM Shyamali, Ranchi",
      date: "March 2022",
      grade: "84%",
      desc: "I completed my Senior Secondary education in the Science stream from JVM Shyamali, Ranchi, in March 2022. During my time at the school, I built a strong academic foundation in subjects like Physics, Chemistry, and Mathematics. I also actively participated in school events and science-related activities, which helped nurture my interest in technology and problem-solving.",

      degree: "CBSE(XII) - PCM with Computer Science ",
    },
    {
      id: 2,
      img: davLogo,
      school: "DAV Kapildev Public School, Ranchi",
      date: "March 2020",
      grade: "90%",
      desc: "I completed my Secondary education (Class 10) from DAV Kapildev Public School, Ranchi, in 2020. My time at the school helped me develop a strong academic base across core subjects. I also took part in various co-curricular activities, which contributed to my overall growth and interest in learning.",
      degree: "CBSE(X)",
    },
    
  ];

 
  export const projects = [
    {
      id: 0,
      title: "IntelliLift",
      description:
      "Built a full-stack AI-powered fitness app using Next.js, React, Tailwind,Shadcn UI, and Convex for real-time data and responsive design.Integrated Voice AI (Vapi) & Gemini LLM to deliver conversational fitness coaching, personalized workout and diet plans.",
      image: IntelliLiftLogo,
      tags: ["Next JS", "TailwindCSS", "React JS", "VAPI"],
      github: "https://github.com/Saurya29/IntelliLift",
      webapp: "https://intelli-lift.vercel.app/",
    },
    {
      id: 1,
      title: "LinkUp",
      description:
      "Built a full-stack real-time chat app using MERN stack, Socket.io (for messaging & online user status), and Zustand for global state management.Designed responsive UI with Tailwind CSS and DaisyUI, featuring clean components and a seamless user experience across devices.",
      image: LinkupLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saurya29/LinkUp",
      webapp: "https://github.com/Saurya29/LinkUp",
    },
    {
      id: 2,
      title: "Medicine Recommendation System",
      description:
      "Developed a Flask-based web app using machine learning (Scikit-learn/TensorFlow) to predict diseases and provide personalized medical recommendations.Built a responsive UI with HTML/CSS/JavaScript, ensured data privacy, and used SQLite/MongoDB for scalable storage.", 
      image: RecommendationLogo,
      tags: ["Python", "Tensorflow", "Flask", "CSS", "JavaScript"],
      github: "https://github.com/Saurya29/Medicine_Recommendation",
      webapp: "N/A",
    },
    
  ];  
  export const workexperience = [
    {
      id: 0,
      title: "IntelliLift",
      description:
      "Built a full-stack AI-powered fitness app using Next.js, React, Tailwind,Shadcn UI, and Convex for real-time data and responsive design.Integrated Voice AI (Vapi) & Gemini LLM to deliver conversational fitness coaching, personalized workout and diet plans.",
      image: IntelliLiftLogo,
      tags: ["Next JS", "TailwindCSS", "React JS", "VAPI"],
      github: "https://github.com/Saurya29/IntelliLift",
      webapp: "https://intelli-lift.vercel.app/",
    },
  ];