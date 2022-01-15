import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

const About = () => (
  <Card>
    <div className='about'>
      <h1>This is about page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laboriosam
        incidunt cupiditate assumenda beatae soluta, quasi recusandae
        perferendis error aliquid, animi quis magnam, iure veritatis quaerat
        repellendus. Iusto, sit commodi?
      </p>
      <Link to='/'>Back To Home</Link>
    </div>
  </Card>
)

export default About
