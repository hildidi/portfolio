
import profile from './profile.png';
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faGem, faVideo } from '@fortawesome/free-solid-svg-icons';

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
			link: "https://drive.google.com/file/d/1mVXgpbr3kZj_BRVE2LzUT10_nkm7Sd31/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
		"I have experience working in the housing and transportation fields. I am passionate about web accessibility.",
		"Having worked directly with persons with disabilities and remediating digital content for accessibility led me to pursue software engineering at the Flatiron School.",
		"This has been a great combination of my skills and interests. I am eager to continue to create applications that benefit a wide range of users.",
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
	title: "Diana Cárdenas | Software Engineer",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}