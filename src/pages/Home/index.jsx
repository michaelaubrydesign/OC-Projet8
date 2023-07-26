import Banner from '../../components/Banner'
import Grid from '../../components/Grid'
import homeimg from '../../assets/homeimg.jpg'

function HomePage() {
  return (
    <div>
      <Banner
        title="Chez vous, partout et ailleurs"
        backgroundImage={homeimg}
      />
      <Grid />
    </div>
  )
}

export default HomePage
