import './home.scss'
import { Navbar } from '../../components/navbar/Navbar'
import { Sidebar } from '../../components/sidebar/Sidebar'
const Home=()=> {
  return (
    <div className="home">
      <Sidebar/>
      <div className='home-container'>
        <Navbar/>
        Contatior
      </div>
    </div>
  )
}

export default Home