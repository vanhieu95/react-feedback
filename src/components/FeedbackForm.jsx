import { useContext, useState, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from './context/FeedbackContext'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [sendDisabled, setSendDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setSendDisabled(false)
      setMessage('')
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (e.target.value === '') {
      setSendDisabled(true)
      setMessage('')
    } else if (e.target.value !== '' && e.target.value.trim().length <= 10) {
      setSendDisabled(true)
      setMessage('Text must be at least 10 character')
    } else {
      setSendDisabled(false)
      setMessage('')
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const feedback = {
        rating,
        text
      }

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, feedback)
      } else {
        addFeedback(feedback)
      }

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' isDisabled={sendDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
