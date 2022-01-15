import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

const FeedbackStats = () => {
  const { feedbacks } = useContext(FeedbackContext)

  // Calculate rating avg
  const reviews = feedbacks.length
  let average =
    feedbacks.reduce((total, item) => total + item.rating, 0) / reviews
  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{reviews} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
