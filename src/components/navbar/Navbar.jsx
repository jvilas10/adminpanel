import './navbar.scss'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import FullscreenExitSharpIcon from '@mui/icons-material/FullscreenExitSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import ChatBubbleOutlineSharpIcon from '@mui/icons-material/ChatBubbleOutlineSharp';
import ReorderSharpIcon from '@mui/icons-material/ReorderSharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';

export const Navbar = () => {
  return (
   <div className='navbar'>
     <div className='wrapper'>
         <div className='search'>
            <input type='text' placeholder='Search' />
            <SearchSharpIcon/>
         </div>
         <div className="items">
          <div className="item">
          <LanguageSharpIcon /> Languages
          </div>
          <div className="item">
          <DarkModeSharpIcon /> 
          </div>
          <div className="item">
          <FullscreenExitSharpIcon /> 
          </div>      
          <div className="item">
           <NotificationsNoneSharpIcon/>
          </div>
          <div className="item">
          <ChatBubbleOutlineSharpIcon/>
          </div>
          <div className="item">
          <ReorderSharpIcon/>
          </div>
          <div className="item">
            <FaceSharpIcon/>
          </div>
         </div>
     </div>
   </div>
  )
}
