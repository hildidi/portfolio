import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h2 className="text-primary fw-bold">{title}</h2>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card_Skill
							key={index}
							title={value.title}
							description={value.description}
							link={value.link} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h2 className="text-light fw-bold">Projects</h2>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							link={value.link}
							description={value.description}
							icons={value.icons} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h3 className="text-primary">{title}</h3>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
}

export const Card_Skill = ({ title, icons }) => {
	return (
		<div className="card py-2 px-2 mx-sm-3 my-2 card-work-skill" style={{ width: "8rem" }}>
			<p className="text-primary mb-0 text-center">{title}</p>
			{icons && icons.map((value, index) => (
				<Link key={index} href={value.link}>
					<a target="_blank" rel="noreferrer">
						<FontAwesomeIcon className="icon-style mx-1" icons={value.icon} size="2x" />
					</a>
				</Link>
			))}
		</div>
	);
}