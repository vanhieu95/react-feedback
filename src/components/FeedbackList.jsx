import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from './context/FeedbackContext'

const FeedbackList = () => {
  const { feedbacks } = useContext(FeedbackContext)

  if (!feedbacks || feedbacks.length === 0) return <p>No Feed Back</p>

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList
