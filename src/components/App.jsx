import { MainContainer } from "./App.styled";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { useState } from "react";

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const onBtnClick = (e) => {
		const { name } = e.currentTarget;

		switch (name) {
			case 'good':
				setGood(good + 1);
				break;

			case 'neutral':
				setNeutral(neutral + 1)
				break;

			case 'bad':
				setBad(bad + 1)
				break;

			default:
				return;
		}
	}

	const countTotalFeedback = () => {
		return good + neutral + bad;
	}

	const positiveFeedbackPercentage = () => {
		return ((good / countTotalFeedback()) * 100).toFixed(2);
	}

	return (
		<MainContainer>
			<Section title="Please leave feedback">
				<FeedbackOptions
					onBtnClick={onBtnClick} options={['good', 'neutral', 'bad']} />
			</Section>
			<Section title="Statistics">
				{countTotalFeedback() ?
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positive={positiveFeedbackPercentage()}
					/> :
					<Notification message="Not feedback given" />
				}
			</Section>
		</MainContainer>
	)
}