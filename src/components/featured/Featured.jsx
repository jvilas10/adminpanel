import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';

export default function Featured() {
  return (
    <div className='featured'>
        <div className="top">
           <div className="title"> Total Revenue</div>
           <MoreVertOutlinedIcon fontSize='small'/>
        </div>
        <div className="bottom">
           <div className="fearuredChart">
             {/* react-circular-progressbar */}
             <CircularProgressbar  value={66} text={'66%'}/>
           </div>
            <p className='title'>Total Sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previous transactions processing. Last payment may not be included</p>
            <div className="summary">
                <div className="item">
                   <div className="itemTitle">Target</div>
                   <div className="itemResult positive">
                   <ArrowDropUpOutlinedIcon/>
                     <div className="resultAmount">$12.4k</div>
                    </div> 
                </div>
                <div className="item">
                   <div className="itemTitle">Last week</div>
                   <div className="itemResult negative" >
                   <ArrowDropDownOutlinedIcon/>
                     <div className="resultAmount">$12.4k</div>
                    </div> 
                </div>
                <div className="item">
                   <div className="itemTitle">Last Month</div>
                   <div className="itemResult positive">
                   <ArrowDropUpOutlinedIcon/>
                     <div className="resultAmount">$12.4k</div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}
