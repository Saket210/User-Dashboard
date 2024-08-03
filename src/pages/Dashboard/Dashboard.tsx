import UserErrorImage from '../../assets/user_error_image.png'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-div'>
        {/* <a href="https://www.freepik.com/free-vector/cute-people-playing-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_22049524.htm#query=computer%20cartoon&position=25&from_view=keyword&track=ais_hybrid&uuid=b11186da-ff36-42ac-93ad-30aed5970013">Image by catalyststuff</a> on Freepik */}
        <img width={400} height={450} src={UserErrorImage}  alt='' />
        <p>Select a user to view user profile...</p>
    </div>
  )
}

export default Dashboard