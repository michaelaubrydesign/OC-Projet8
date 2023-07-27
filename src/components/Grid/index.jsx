import { Link } from 'react-router-dom'
import Card from '../Card'
import jsonData from '../../datas/housing.json'

function Grid() {
  return (
    <div className="grid">
      {jsonData.map((item) => (
        <Link key={item.id} to={`/logement/${item.id}`}>
          <Card key={item.id} title={item.title} cover={item.cover} />
        </Link>
      ))}
    </div>
  )
}

export default Grid
