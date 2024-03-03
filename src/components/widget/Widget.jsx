import './widget.scss'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Widget=({type})=> {
  let data;

  //teamparay
  const amount = 100;
  const diff = 20;

  switch(type){
     case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<Person3OutlinedIcon className='icon' style={{color:"#f5251d", backgroundColor:"rgba(245,37,29,0.2)" }}/>,
      }
      break;

      case "order":
          data={
            title:"ORDERS",
            isMoney:false,
            link:"See all users",
            icon:<DvrOutlinedIcon className='icon' style={{color:"#dbc72a",  backgroundColor:"rgba(250,227,52,0.2)" }} />,
          }
          break;

       case "earning":
            data={
              title:"ERARNINGS",
              isMoney:true,
              link:"View net earnings",
              icon:<LightbulbOutlinedIcon className='icon' style={{color:"green", backgroundColor:"rgba(42,219,54,0.2)" }}/>,
            }
            break;

        case "balance":
              data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:<AccountBalanceWalletOutlinedIcon className='icon' style={{color:"#b52adb", backgroundColor:"rgba(181,42,219,0.2)" }}/>,
              }
              break;

      default:
      break;  


  }
  return(
    <div className='widget'>
      <div className="left">
        <span className='title'>{data?.title}</span>
        <span className='counter'>{data?.isMoney && "$"} {amount}</span>
        <span className='link'>{data?.link}</span>
      </div>
      <div className="right">
        <div className='percentage positive'><ExpandLessIcon/>20%</div>
        {data?.icon}
        </div>
    </div>)
}

export default Widget;