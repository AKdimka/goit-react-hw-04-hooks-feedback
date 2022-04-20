import PropTypes from "prop-types";
import { StatisticsBox, StatisticsItem, Number } from "./Statistics.styled";


export const Statistics = ({ good, neutral, bad, total, positive }) => (
	<StatisticsBox>
		<StatisticsItem>Good:<Number>{good}</Number></StatisticsItem>
		<StatisticsItem>Neutral:<Number>{neutral}</Number></StatisticsItem>
		<StatisticsItem>Bad:<Number>{bad}</Number></StatisticsItem>
		<StatisticsItem>Total:<Number>{total}</Number></StatisticsItem>
		<StatisticsItem>Positive feedback:<Number>{positive}%</Number></StatisticsItem>
	</StatisticsBox >
)

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positive: PropTypes.string.isRequired,
}