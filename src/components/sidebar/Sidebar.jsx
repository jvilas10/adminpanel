import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import FactCheckSharpIcon from '@mui/icons-material/FactCheckSharp';
import LocalShippingSharpIcon from '@mui/icons-material/LocalShippingSharp';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import SystemSecurityUpdateGoodSharpIcon from '@mui/icons-material/SystemSecurityUpdateGoodSharp';
import PsychologySharpIcon from '@mui/icons-material/PsychologySharp';
import ManageHistorySharpIcon from '@mui/icons-material/ManageHistorySharp';
import ManageAccountsSharpIcon from '@mui/icons-material/ManageAccountsSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
          <Link to="/" style={{textDecoration:'none'}}>
          <span className="logo">LamaLogo</span></Link>
           </div>
          
          
      <hr/>
        <div className='center'>
            <ul className="menu">
               <p className='iconTitle'>Main</p>
               <Link to="/" style={{textDecoration:'none'}}>
                <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
                </li>
                </Link>
                <p className='iconTitle'>List</p>
              
                 <Link to="/user" style={{textDecoration:'none'}}>
                 <li>
                  <PersonIcon className='icon'/>
                  <span>User</span>
                  </li>
                  </Link>
                  <Link to="/products" style={{textDecoration:'none'}}>
                <li>
              
                  <ProductionQuantityLimitsIcon className='icon'/>
                  <span>Products</span>
             
                </li>
                </Link>
                <li>
                  <FactCheckSharpIcon className='icon'/>
                  <span> Order</span>
                </li>
                <li>
                  <LocalShippingSharpIcon className='icon'/>
                  <span>Delivery</span>
                </li>
                <p className='iconTitle'>Useful</p>
                <li>
                  <QueryStatsSharpIcon className='icon'/>
                  <span>Stats</span>
                </li>
                <li>
                  <NotificationsActiveSharpIcon className='icon'/>
                  <span>Notifications</span>
                </li>
                <p className='iconTitle'>Services</p>
                <li>
                  <SystemSecurityUpdateGoodSharpIcon className='icon'/>
                  <span>Systems Health</span>
                </li>
                <li><PsychologySharpIcon className='icon'/>
                <span>Logs</span>
                </li>
                <li>
                  <ManageHistorySharpIcon className='icon'/>
                  <span>Settings</span>
                </li>
                <p className='iconTitle'>User</p>
                <li>
                  <ManageAccountsSharpIcon className='icon'/>
                  <span>Profile</span>
                </li>
                <li>
                  <ExitToAppSharpIcon className='icon'/>
                   <span>Logout</span>
                </li>
              
            </ul>
        </div>
        <div className='bottom'>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
        </div>
    </div>
  )
}
