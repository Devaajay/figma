import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { BiBarChartAlt2 } from 'react-icons/bi';
import { RiVipCrownLine } from 'react-icons/ri';
import { GrLineChart } from 'react-icons/gr';
import Barchart from './Barchart';

import "./css/sidebar.css";
function Sidebar() {
  return (
    <div className='sedebar'>
        <div className='sidebar_header'>
            WSTF FRONT-END HACKTHON
        </div>
       <div className='sedebar_details'>All users <span className='users'>Details <span className='icon'><BiChevronRight/></span></span>
       
        </div> 
        <div className='number'>2,431,340</div>
        <div className='chart'>
            <div className='barchart1'>
                <div className='sub_details1 sub_details4'><GrLineChart/></div>
                <div className='sub_details'>
                    <div className='text_details'>Total earnings</div>
                    <div className='number_details'>540,549</div>
                </div>
            </div>
            <div className='barchart1'>
                <div className='sub_details1 sub_details2'><RiVipCrownLine/></div>
                <div className='sub_details'>
                <div className='text_details'>Sales</div>
                    <div className='number_details'>123,456</div>
                </div>
                </div>
            <div className='barchart1'>
            <div className='sub_details1 sub_details3'><BiBarChartAlt2/></div>
            <div className='sub_details'>
            <div className='text_details'>Purchase</div>
                    <div className='number_details'>43,536,373</div>
            </div>
            </div>
        </div>
       <Barchart/>
    </div>
  )
}

export default Sidebar

