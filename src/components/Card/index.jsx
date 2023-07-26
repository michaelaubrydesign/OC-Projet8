function Card({ cover, title }) {
  return (
    <div className="card">
      <img
        src={cover}
        alt={title}
        className="card__cover"
        style={{ objectFit: 'cover' }}
      ></img>
      <div className="card__shadow"></div>
      <span>{title}</span>
    </div>
  )
}

export default Card
