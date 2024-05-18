import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hi! I'm a fourth year student at California State University Fullerton. I am passionate about web development and enjoy building user-friendly web applications. I have experience with technologies like React, Node.js, and TailwindCSS. I also do research in the field of machine learning and artificial intelligence. I am always eager to learn new things and take on new challenges.`;

export const EXPERIENCES = [
  {
    year: "February 2024 - present",
    role: "Junior Frontend Engineer",
    company: "MERU AI",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "TailwindCSS", "Node.js"],
  },
  {
    year: "June 2023 - August 2023",
    role: "ECS Dean’s Assistant",
    company: "California State University Fullerton, College of Engineering and Computer Science",
    description: `Actively communicates with students who have inquiries about the ALEKS program, providing
    support, guidance, and further clarifications to ensure understanding and success for the students. Utilizes Excel for comprehensive
    data analysis which included writing, processing, and visualizing the data. Leverages Excel’s data visualization capabilities to 
    present any findings in an easily understandable manner`,
    technologies: ["Execl", "Python", "SQL"],
  },
  {
    year: "June 2023",
    role: "ASSURE-US Research Assistant",
    company: "California State University Fullerton",
    description: `Conducted research on machine learning models and algorithms and their applications for solving real
    world problems. Designed a Sudoku Solver using TensorFlow and Machine Learning. Developed a classification neural network in Google Colab using the 1 million sudoku puzzles dataset
    from Kaggle which would solve the puzzles by predicting the solutions`,
    technologies: ["Python", "GoogleColab", "TensorFlow"],
  },
  {
    year: "June 2022 - August 2022",
    role: "CIC PCUBED Research Assistant",
    company: "California State University Fullerton",
    description: `SummerSession A was based on research work, Data Science Analysis of Spotify Music. Created graphs that displayed data from Spotify’s API, utilized packages such as Spotipy, Numpy,
    Pandas and Plotly; coded with python in the Pycharm IDE`,
    technologies: ["SpotifyAPI", "Python", "Jupyter Notebook"],
  },
];

export const PROJECTS = [
  {
    title: "Motion",
    image: project1,
    description:
      "A Notion clone webapp that boosts productivity for users.",
    technologies: ["HTML", "TailwindCSS", "React", "Node.js", "MongoDB", "JavaScript", "VScode", "Git", "Github"],
  },
  {
    title: "tboy swag",
    image: project2,
    description:
      "A collective of information to aid transmascs in their transition. Includes grants, scholarships, and resources.",
    technologies: ["Javascript", "TailwindCSS", "React", "Node.js", "VScode", "Git", "Github"],
  },
  {
    title: "Sudoku Solver",
    image: project3,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Python", "TensorFlow", "GoogleColab"],
  },
  {
    title: "Spotify Data Analysis",
    image: project4,
    description:
      "Created graphs that displayed data from Spotify’s API, utilized packages such as Spotipy, Numpy, Pandas and Plotly; coded with python in the Pycharm IDE",
    technologies: ["Python", "Pycharm", "SpotifyAPI"],
  },
];

export const CONTACT = {
  email: "hantanguyen@gmail.com"
};
