import './BestDownloads.css'
import WD1 from         '../../assets/images/WD11.jpeg'
import Uncharted1 from  '../../assets/images/Uncharted1.jpeg'
import Metro from       '../../assets/images/Metro.jpeg'
import assassins from   '../../assets/images/Assassins.jpeg'
import game1 from       '../../assets/images/SpiderMan.jpeg'
const BestDownloads = () => {
  return (
    <>
  <div className='flexx'>
              <div  >
          <div className="card  bg-primary">
          <img src={game1} className="card-img-top " />
          <div className="card-body">
            <h5 className="card-title">Spider-Man</h5>      
                <ul>
                    <li><span>4 </span></li>
                    <li><span>2 M</span></li>
                </ul>
              <a href="#" className="btn btn-primary">Download</a>
          </div>
          </div>
              </div>
              <div className="card bg-primary">
          <img src={assassins} className="card-img-top " />
          <div className="card-body">
            <h5 className="card-title">Assassins</h5>      
                <ul>
                    <li><span>4.5</span></li>
                    <li><span>2.8M</span></li>
                </ul>
              <a href="#" className="btn btn-primary">Download</a>
          </div>
              </div>       
              <div className="card bg-primary">
            <img src={WD1} className="card-img-top " />
            <div className="card-body">
              <h5 className="card-title">Watch dogs2</h5>      
                  <ul>
                      <li><span>3.2</span></li>
                      <li><span>1.2 M</span></li>
                  </ul>
                <a href="#" className="btn btn-primary">Download</a>
            </div>
              </div>
              <div className="card card bg-primary">
          <img src={Metro} className="card-img-top " />
          <div className="card-body">
            <h5 className="card-title">Watch dogs2</h5>      
                <ul>
                    <li><span>3</span></li>
                    <li><span>1.9 M</span></li>
                </ul>
              <a href="#" className="btn btn-primary">Download</a>
          </div>
              
              
              </div>
              <div className="card card bg-primary">
          <img src={Uncharted1} className="card-img-top " />
          <div className="card-body">
            <h5 className="card-title">Watch dogs2</h5>      
                <ul >
                    <li><span>4.9</span></li>
                    <li><span>3.1 M</span></li>
                </ul>
              <a href="#" className="btn btn-primary">Download</a>
          </div>
              </div>
  </div>
    </>
  )
}
export default BestDownloads


