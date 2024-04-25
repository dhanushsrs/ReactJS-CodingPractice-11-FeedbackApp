// Write your React code here.
import {Component} from 'react'
import FeedbackEmoji from '../FeedbackEmoji/index'

import './index.css'

class Feedback extends Component {
  state = {isHomePage: true}

  onChangeHomePage = () => {
    this.setState({isHomePage: false})
  }

  render() {
    const {isHomePage} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let pageOutput

    if (isHomePage) {
      pageOutput = (
        <div className="feedback-card-container">
          <h1 className="feedback-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul
            className="feedback-emoji-container"
            onClick={this.onChangeHomePage}
          >
            {emojis.map(eachEmoji => (
              <FeedbackEmoji key={eachEmoji.id} eachEmojiItem={eachEmoji} />
            ))}
          </ul>
        </div>
      )
    } else {
      pageOutput = (
        <div className="feedback-card-container">
          <img src={loveEmojiUrl} className="love-img" alt="love emoji" />
          <h1 className="feedback-text">Thank You!</h1>
          <p className="feedback-para">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      )
    }
    return <div className="feedback-bg-container">{pageOutput}</div>
  }
}

export default Feedback
