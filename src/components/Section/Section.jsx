import React from "react";
import propTypes from "prop-types";

const Section = ({ title, children }) => {
	return (
		<section className="section">
			<h1 className="title">{title}</h1>

			{children}
		</section>
	)
}

Section.propTypes = {
	title: propTypes.string,
	children: propTypes.node,
}

export default Section;