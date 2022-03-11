import React from "react";
import propTypes from "prop-types";
//import css from "../Statistics/Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positive }) => (
	<div className="statistics">
		<p className="text">Good:<span>{good}</span></p>
		<p className="text">Neutral:<span>{neutral}</span></p>
		<p className="text">Bad:<span>{bad}</span></p>
		<p className="text">Total:{total}</p>
		<p className="text">Positive feedback:{positive}%</p>
	</div >
)

Statistics.propTypes = {
	good: propTypes.number.isRequired,
	neutral: propTypes.number.isRequired,
	bad: propTypes.number.isRequired,
	span: propTypes.number.isRequired,
	total: propTypes.number.isRequired,
	positive: propTypes.number.isRequired,
}

export default Statistics;