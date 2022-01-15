import PropTypes from 'prop-types'

const Header = ({ text }) => {
  return (
    <header>
      <div className='container'>
        <h1>Hello {text}</h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
}

export default Header
