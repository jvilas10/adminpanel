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

export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className="logo">LamaLogo</span> </div>
      <hr/>
        <div className='center'>
            <ul className="menu">
               <p className='iconTitle'>Main</p>
                <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
                </li>
                <p className='iconTitle'>List</p>
                <li>
                  <PersonIcon className='icon'/>
                  <span>User</span>
                </li>
                <li>
                  <ProductionQuantityLimitsIcon className='icon'/>
                  <span>Products</span>
                </li>
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
          <div className="colorOptions"></div>
          <div className="colorOptions"></div>
        </div>
    </div>
  )
}
