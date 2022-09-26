
import profile from './profile.png';
import { faAppStore, faCss3, faGithub, faGooglePlay, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGem, faTrain, faVideo } from '@fortawesome/free-solid-svg-icons';

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
	description: "I'm a Software Engineer based in New York City.",
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
	description: [
		"Software engineer with a background in web accessibility, data management, and user experience. Passionate about inclusive web development to help design innovative technology for a wide range of users."
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Reporting System 311",
			description: "Non-emergency reporting system where City residents can to submit issues about potholes, broken sidewalks and other issues handled by public agencies in NYC.",
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
			title: "Portfolio",
			description: "A portfolio website template showcasing my work, projects and skills as a software developer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hildidi/myprofile/tree/main/my-website",
				},
			]
		},
	],
}

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
			icons: faTrain
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
	title: " Reactjs developer | Backend Developer",
	description: "I create static websites...",
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