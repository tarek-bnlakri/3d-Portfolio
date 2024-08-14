import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    python,
    mysql,
    postgresql,
    java,
    c,
    cplu,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    postman,
    adobe,
    figma
} from "../assets/icons";

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Programing",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Programing",
    },  
    {
        imageUrl: cplu,
        name: "C++",
        type: "Programing",
    },
    {
        imageUrl: python,
        name: "Paython",
        type: "Programing",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    
    
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: postman,
        name: "postman",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
   
   
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: adobe,
        name: "AdobeXd",
        type: "Designe",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Designe",
    },
   
   
   
   
    
   
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "*****",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "*******",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "***",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "******",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "*****",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "*******",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "*****",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "**********",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Full Stack Blog App',
        description: 'Developed a full-stack web application utilizing Next.js and React.js for the front-end. Implemented MongoDB as the database, with Prisma serving as the ORM to handle communication between the API and the database. Styled the application using CSS to ensure a responsive and user-friendly interface ',
        link: 'https://github.com/tarek-bnlakri/full-stack-Blog-app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack E-learning platform',
        description: 'Developed a full-stack web application utilizing Next.js and React.js for the front-end. Implemented MongoDB as the database, with Prisma serving as the ORM to handle communication between the API and the database. Styled the application using SASS and material UI to ensure a responsive and user-friendly interface',
        link: 'https://full-stack-e-learing-platform.vercel.app',
    },
  

    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Car Selling',
        description: 'Developed a fully responsive landing page for selling cars using HTML, CSS, and JavaScript, ensuring a seamless user experience across all devices',
        link: 'https://github.com/tarek-bnlakri/Car-Selling',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'fitness application',
        description: 'Developed a fitness web application using React.js for the front-end and styled with Material UI. Integrated an external API to fetch exercise data, providing users with a dynamic and engaging experience.',
        link: 'https://github.com/tarek-bnlakri/fitnessApp',
    }
];