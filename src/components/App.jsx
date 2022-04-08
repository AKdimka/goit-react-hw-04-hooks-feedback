import { MainContainer } from "./App.styled";
import { Component } from "react";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	onBtnClick = (e) => {
		const name = e.currentTarget.name;

		this.setState((prev) => {
			return {
				[name]: prev[name] + 1
			}
		})
	}

	countTotalFeedback() {
		return Object.values(this.state).reduce((a, b) => a + b, 0);
	}

	countPositiveFeedbackPercentage() {
		return (this.state.good / this.countTotalFeedback() * 100).toFixed(2);
	}

	render() {
		const { good, neutral, bad } = this.state;

		return (
			<MainContainer>
				<Section title="Please leave feedback">
					<FeedbackOptions
						onBtnClick={this.onBtnClick} options={Object.keys(this.state)} />
				</Section>
				<Section title="Statistics">
					{this.countTotalFeedback() ?
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback()}
							positive={this.countTotalFeedback() && this.countPositiveFeedbackPercentage()}
						/> :
						<Notification message="Not feedback given" />
					}
				</Section>
			</MainContainer>
		)
	}
}

