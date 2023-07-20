import homeimg from '../../assets/homeimg.jpg'
import '../../sass/main.scss'

function Banner() {
  return (
    <div className="banner">
      {/* <img className="banner__image" src={homeimg} alt="Falaise" /> */}
      <div className="banner__filter"></div>
    </div>
  )
}

export default Banner
