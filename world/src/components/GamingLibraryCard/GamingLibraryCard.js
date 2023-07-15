import './GamingLibraryCard.css'


import WD1 from         '../../assets/images/WD11.jpeg'
import Uncharted1 from  '../../assets/images/Uncharted1.jpeg'
import Metro from       '../../assets/images/Metro.jpeg'
import assassins from   '../../assets/images/Assassins.jpeg'
import Uncharted3 from '../../assets/images/Uncharted3.jpeg'

const GamingLibraryCard = () => {
  return (
     <div className='cont'>
          
          <div className='CardG gaming-library-card'>
              <ul className='ul11'>
                   <li><img className='imgcard'  src={Uncharted3}  /></li>        
                   <li className='lii'><h4><b>Metro</b>        </h4></li>       
                   <li className='lii'><h4>   Action</h4></li>       
                   <li className='lii'><h4>Adventure </h4></li>     
                   <li className='lii'><h4>Free    </h4></li>
              </ul>
          </div>
          <div className='btn btn-dark main-buttonn' >
                    <a href='/#'>Download</a>
                    </div> 
          





                    
    </div>







  )
}

export default GamingLibraryCard