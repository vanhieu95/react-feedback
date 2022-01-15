import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData)
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedbacks([newFeedback, ...feedbacks])
  }

  const updateFeedback = (id, updateItem) => {
    setFeedbacks(
      feedbacks.map((item) =>
        item.id === id ? { ...item, ...updateItem } : item
      )
    )
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedbacks(feedbacks.filter((item) => item.id !== id))
    }
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        addFeedback,
        updateFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
