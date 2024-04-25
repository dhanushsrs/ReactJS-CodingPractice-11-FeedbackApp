import './index.css'

const FeedbackEmoji = props => {
  const {eachEmojiItem} = props
  const {name, imageUrl} = eachEmojiItem

  return (
    <li className="emoji-div-container">
      <img src={imageUrl} alt={name} className="emoji-img" />
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default FeedbackEmoji
