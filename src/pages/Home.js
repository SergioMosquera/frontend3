import React, {Component} from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route, 
   Link
 } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
              <body>
                 <div id='back' className='gralBackground'>
                   <div className='column1' style={{marginRight:'5px'}}>
                      <div id='general'>
                         <table style={{align:'center', border:0, width: '100%', margin: '5px'}}>
                            <tbody>
                               <tr>                      
                                  <td className='whiteTitles'>
                                     <strong>General</strong>
                                  </td>
                                  <td></td>
                               </tr>
                               <tr>
                                  <td style={{color:'#FFFF'}}>
                                     {/*<!--  Content  -->*/}
                                     <div className='gralcontent'>
                                        <ul>
                                          <li>View Time Card</li>
                                          <li>My Profile</li>
                                          <li>View Call Details</li>
                                          <li>View Demo Attendance Report</li>
                                          <li>Auction Search</li>
                                          <li>Auction Access View</li>
                                          <li>Bid Search</li>
                                        </ul>
                                     </div>
                                    {/*<!--  End Content  -->*/}
                                  </td>
                               </tr>
                            </tbody>
                         </table>      
                      </div>

                      <div id='beast'>
                     <table style={{align:'center', border:0, width: '100%', margin: '5px'}}>
                        <tbody>
                           <tr>
                              <td className='whiteTitles'>
                                 <strong>Beast</strong>
                              </td>
                              
                           </tr>
                           <tr>
                              <td style={{bgcolor:'#FFFFFF'}}>
                                   {/*<!--  Content  -->*/}
                                   <div className='gralcontent'>
                                      <ul>
                                         <Switch>
                                             <Link to='/sverification'>
                                                <li><a>Site Verification</a></li>
                                             </Link>
                                         </Switch>
                                        <li><a>URL Analysis - Xpath creation</a></li>
                                        <li><a>Aggregator Agency Mappings</a></li>
                                        <li>View Extraction Work</li>
                                        <li><a>Bid Classification Manual Review</a></li>
                                        <li><a>Content Approval: New Extracts</a></li>
                                        <li><a>Content Approval: 3-Month Check</a></li>
                                        <li><a>Content Approval: Non Bids</a></li>
                                        <li><a>Bid Syndication Agencies Manager</a></li>
                                      </ul>
                                    </div>
                                    {/*<!--  End Content  -->*/}
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     </div>   
                   </div>
                   <div className='column1' style={{marginRight:'5px'}}>
                      <div id='agency'>
                        <table style={{align:'center', border:0, width: '100%', margin: '5px'}}>
                           <tbody>
                           <tr>
                              <td className='whiteTitles'>
                                 <strong>Agency</strong>
                              </td>
                           </tr>
                           <tr>
                              <td style={{color:'#FFFFFF'}}>
                                 <div className='gralcontent'>
                                     {/*<!--  Content  -->*/}
                                     <ul>
                                        <li>Agency CRM</li>
                                        <li>Auctions Marked for Research</li>
                                     </ul>
                                     {/*<!--  End Content  -->*/}
                                 </div>
                              </td>
                           </tr>
                           </tbody>                           
                        </table>
                     </div>
                   </div>

                 </div>
                 <footer>
                    <div id='back' className='gralHeader'>
                       <div className='tabHeader'>
                          <a><img src="assets/img/home.gif" title="Home" alt="Home" /></a>
                       </div>
                       <Switch>
                          <Link to='/lcrud'>
                          <div className='tabHeader'>
                              <a><img src="assets/img/calendarIcon.gif" title="Calendar" alt="Calendar" /></a>
                          </div>
                          </Link>
                       </Switch>
                       
                       <div className='tabHeader'>
                          <a><img src="assets/img/agencyIcon.gif" title="Agency" alt="Agency"/></a>
                       </div>
                       <div className='tabHeader'>
                          <a><img src="assets/img/clockInOn.gif" title="ClockIn" alt="ClockIn"/></a>
                       </div>
                       <div className='tabHeader'>
                          <a><img src="assets/img/clockOutOff.gif" title="ClockOut" alt="ClockOut"/></a>
                       </div>
                       <div className='tabHeader'>
                          <a><img src="assets/img/shutdown.gif" title="ShutDown" alt="ShutDown"/></a>
                       </div>
              
                    </div>
                 </footer>
              </body>
          

        )
    }

}
export default Home;