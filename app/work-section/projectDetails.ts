export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "Library Management System",
    description:
      "Library Management System where you can enter the record of new books ",
    technologies: ["C++", "OOD", "File Handling Concept"],
    github: "https://github.com/anushreya3/Library_Management_System",
    demo: "",
    image: require(".//../../public/projects/LMS.png"),
    available: false,
  },
  {
    id: 2,
    name: "Facial Emotion Detactor",
    description:
      "The objective of this research is to produce an automatic facial emotion detection system to identify different emotions based on these experiments the system could identify several people that are sad, surprised, and happy, in fear, are angry, etc.",
    technologies: ["Python", "Machine Learning","OpenCV"],
    github: "https://github.com/anushreya3/Facial_Emotion_Detection",
    demo: "",
    image: require(".//../../public/projects/FED.jpg"),
    available: false,
  },
  {
    id: 3,
    name: "Employee Retention Analysis Tool",
    description:
      "most efficient way to analyze retention per cohort is to group employees by their start month and then use the retention rate formula to track each group. After tracking each cohort for a year, you will have essential data and an overall retention rate at your fingertips!",
    technologies: ["Python", "Machine learning"],
    github: "https://github.com/anushreya3/Employee_Retention_Using_Cohort_Analysis",
    demo: "",
    image: require(".//../../public/projects/ER.png"),
    available: false,
  },
  // {
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description:
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description:
//       "An image generator website that allows users to generate, combine, and download images.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description:
//       "A website that reduces the length of your URL using Bit.ly's API",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description:
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
