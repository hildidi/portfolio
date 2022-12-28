
import profile from './profile.png';
<<<<<<< HEAD
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGem, faVideo } from '@fortawesome/free-solid-svg-icons';
=======
import { faAppStore, faCss3, faGithub, faGooglePlay, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGem, faTrain, faVideo } from '@fortawesome/free-solid-svg-icons';
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601

export const navigation = {
	name: "Diana",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hi, I'm Diana!",
<<<<<<< HEAD
	description: "I'm a Software Engineer based in New York City.",
=======
	description: "I'm a Software Engineer based in New York City with a passion for web accessibility.",
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
<<<<<<< HEAD
			link: "https://drive.google.com/file/d/1mVXgpbr3kZj_BRVE2LzUT10_nkm7Sd31/view?usp=sharing",
=======
			link: "https://drive.google.com/file/d/1HF5t6aK_i1Vp9VZfilVjRMUa9PhwjzdP/view?usp=sharing",
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
<<<<<<< HEAD
		"I have experience working in the housing and transportation fields. I am passionate about web accessibility.",
		"Having worked directly with persons with disabilities and remediating digital content for accessibility led me to pursue software engineering at the Flatiron School.",
		"This has been a great combination of my skills and interests. I am eager to continue to create applications that benefit a wide range of users.",
	],
}

=======
		"Software engineer with a background in web accessibility, data management, and user experience. Passionate about inclusive web development to help design innovative technology for a wide range of users."
	],
}
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601

export const projects = {
	title: "Projects",
	cards: [
		{
<<<<<<< HEAD
			title: "Reporting System 311",
			description: "Non-emergency reporting system where City residents can to submit issues about potholes, broken sidewalks and other issues handled by public agencies in NYC.",
=======
			title: [
				{
					name: "Reporting System NYC 311",
					link: "https://github.com/hildidi/311-services-project"
				}
			],
			description: "Web app developed using Ruby on Rails in the backend and React in the frontend. The app allows users to submit non-emergency issues handled by NYC public agencies.",
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
			icons: [
				{
					icon: faVideo,
					link: "https://www.loom.com/share/7e2032342f7245b1b9c51a87ae317bd2",
				},
				{
					icon: faGithub,
					link: "https://github.com/hildidi/311-services-project",
<<<<<<< HEAD
=======
				},
			]
		},
		{
			title: "Vegan Catering",
			link: "https://github.com/hildidi/VeganCartering",
			description: "Web app developed using React in the frontend. The app is designed for users to place catering orders and submit suggestions.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hildidi/VeganCartering",
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
				},
			]
		}
		// {
		// 	title: "Portfolio",
		// 	description: "A portfolio website template showcasing my work, projects and skills as a software developer.",
		// 	icons: [
		// 		{
		// 			icon: faGithub,
		// 			link: "https://github.com/hildidi/myprofile/tree/main/my-website",
		// 		},
		// 	]
		// },
	],
}

export const work = {
	title: "Skills",
	cards: [
		{
			title: "JavaScript"
		},
		{
<<<<<<< HEAD
			title: "Portfolio",
			description: "A portfolio website template showcasing my work, projects and skills as a software developer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hildidi/myprofile/tree/main/my-website",
				},
			]
=======
			title: "Ruby"
		},
		{
			title: "Ruby on Rails"
		},
		{
			title: "React.js"
		},
		{
			title: "Node.js"
		},
		{
			title: "GraphQL"
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
		},
		{
			title: "PostgreSQL"
		},
		{
			title: "Firebase"
		}

	],
}

<<<<<<< HEAD
export const work = {
	title: "Skills",
	cards: [
		{
			title: "JavaScript",
			icons: faJs
		},
		{
			title: "React.js",
			icons: faReact
		},
		{
			title: "Node-js",
			icons: faNodeJs
		},
		{
			title: "Rails",
		},
		{
			title: "Ruby",
			icons: faGem
		},
		{
			title: "HTML5",
			icons: faHtml5
		},
		{
			title: "CSS",
			icons: faCss3,
		},
		{
			title: "GitHub",
			icons: faGithub,
		}

	],
}
=======
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601

export const contact = {
	title: "Get in touch",
	description: "Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:hcardenas00@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "https://tidycal.com/dianacardenas",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
<<<<<<< HEAD
	title: "Diana Cárdenas | Software Engineer",
=======
	title: " Reactjs developer | Backend Developer",
	description: "I create static websites...",
>>>>>>> c11d39d66903d5995b81382211311b33e7a2c601
	image: profile.src,
}

export const links = {
	image: profile.src,
	// title: "@hildidi",
	description: "Reactjs Developer | Backend developer",
	cards: [
		{
			title: "My Profile",
			link: "https://hdianacardenas.com/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hildidi/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hdcardenas/",
		},
	]
}