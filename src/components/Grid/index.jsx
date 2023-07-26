import Card from '../Card'
import jsonData from '../../datas/housing.json'

function Grid() {
  return (
    <div className="grid">
      {jsonData.map((item) => (
        <Card key={item.id} title={item.title} cover={item.cover} />
      ))}
    </div>
  )
}

export default Grid
