import React from 'react';
import Link from 'next/link'

export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container">
				<h2 className="text-primary fw-bold">{title}</h2>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3" role="button" type="button">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3" role="button" type="button">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-secondary text-center py-2 px-5">
			<div className="container text-muted">

				{/* webring */}

				<nav className="a11y-webring-club" aria-labelledby="a11y-webring-club">
					<h2 id="a11y-webring-club">a11y-webring.club</h2>
					<p>This site is a member of the <a rel="external" href="https://a11y-webring.club/">a11y-webring.club</a>.</p>
					<ul>
						<li><a rel="previous external" href="https://a11y-webring.club/prev">Previous website</a></li>
						<li><a rel="external" href="https://a11y-webring.club/random">Random website</a></li>
						<li><a rel="next external" href="https://a11y-webring.club/next">Next website</a></li>
					</ul>
				</nav>

				{/* <small>&copy; 2021 {" "}
					Open sourced with love under {" "}
					<Link href="https://github.com/hashirshoaeb/portfolio/blob/main/LICENSE">
						<a>MIT</a>
					</Link>
					{" "} License
				</small> */}
			</div>
		</footer>
	);
}