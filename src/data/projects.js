export const projects = [
  {
    id: 1,
    title: "VARTA – Real-Time Chat App",
    description:
      "A real-time chat application built using the MERN stack with Socket.io for instant messaging. Features JWT-based authentication, media uploads via Cloudinary, responsive UI using Tailwind CSS, and scalable frontend-backend separation.",
    image: "images/projects/project1.png",
    category: "Web Application",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "Zustand"
    ],
    githubUrl: "https://github.com/Sushruta17/varta-realtime-chat"
  },
  {
    id: 2,
    title: "IoT Radio Security using SDR",
    description:
      "Security research project analyzing vulnerabilities in 433 MHz IoT radio networks. Built a testbed using ESP32 and RF modules, demonstrated replay attacks using ADALM-Pluto SDR, and implemented sequence number-based mitigation.",
    image: "images/projects/project2.jpeg",
    category: "Cybersecurity / IoT",
    technologies: [
      "ESP32",
      "RF Modules",
      "ADALM-Pluto SDR",
      "Universal Radio Hacker",
      "Arduino",
      "RadioHead Library"
    ],
    githubUrl: "https://github.com/Sushruta17/PlutoSDR-IoT-Security"
  },
  {
    id: 3,
    title: "Virtual Memory Simulator",
    description:
      "A C++ based simulator for virtual memory management supporting Map, Single-Level, and Two-Level page tables. Includes a multi-threaded trace generator using POSIX threads and a performance analysis module.",
    image: "images/projects/project3.png",
    category: "Systems / OS",
    technologies: [
      "C++",
      "Operating Systems",
      "POSIX Threads",
      "Paging",
      "Virtual Memory",
      "Makefile"
    ],
    githubUrl: "https://github.com/Sushruta17/virtual-memory-simulator"
  },
  {
    id: 4,
    title: "EasyMart – E-commerce Website",
    description:
      "A full-stack e-commerce website with product CRUD operations, Stripe payment integration, cart management, user authentication, email notifications, and password reset functionality.",
    image: "images/projects/project4.png",
    category: "Web Application",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Stripe",
      "Nodemailer"
    ],
    githubUrl: "https://github.com/Sushruta17/EasyMart-Store"
  }
];

export const categories = ['All','Web Application','Systems / OS','Cybersecurity / IoT' ]