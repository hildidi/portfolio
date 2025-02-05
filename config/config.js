
import profile from './profile.png';
import { faAppStore, faCss3, faGithub, faGooglePlay, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGem, faTrain, faVideo } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Hilda",
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
			link: "#links",
		},
	],
}
export const intro = {
	title: "Hi, I'm Hilda!",
	description: "I'm a Software Engineer based in New York City with a passion for building inclusive, web-accessible applications.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1HF5t6aK_i1Vp9VZfilVjRMUa9PhwjzdP/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: "Software engineer with a background in web accessibility, data management, and user experience. Passionate about inclusive web development to design innovative technology for a wide range of users."
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: [
				{
					name: "Reporting System NYC 311",
					link: "https://github.com/hildidi/311-services-project"
				}
			],
			description: "Web app developed using Ruby on Rails in the backend and React in the frontend. The app allows users to submit non-emergency issues handled by NYC public agencies.",
			icons: [
				{
					icon: faVideo,
					link: "https://www.loom.com/share/7e2032342f7245b1b9c51a87ae317bd2",
				},
				{
					icon: faGithub,
					link: "https://github.com/hildidi/311-services-project",
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
				},
			]
		}
	],
}

export const work = {
	title: "Skills",
	cards: [
		{
			title: "JavaScript"
		},
		{
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
		},
		{
			title: "PostgreSQL"
		},
		{
			title: "Firebase"
		}

	],
}


export const contact = {
	title: "Get in touch",
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
	title: " Reactjs developer | Backend Developer",
	description: "I create inclusive websites with accessibility in mind.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hildidi",
	description: "Reactjs Developer",
	cards: [

		{
			title: "My GitHub",
			link: "https://github.com/hildidi/"
		},

		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hdcardenas/"
		}

	]
}