import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import jsonData from '../../datas/housing.json'

function HousingDetails() {
  const { id } = useParams()
  const housingData = jsonData.find((item) => item.id === id)

  const { pictures } = housingData
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="housing">
      {pictures.length > 1 ? ( // Condition pour afficher le carousel si pictures contient plus d'une image
        <div className="housing__carousel">
          <img src={pictures[currentImageIndex]} alt={housingData.title} />
          <i className="fas fa-chevron-left" onClick={handlePrevImage}></i>
          <span>{`${currentImageIndex + 1}/${pictures.length}`}</span>
          <i className="fas fa-chevron-right" onClick={handleNextImage}></i>
        </div>
      ) : (
        // Sinon, affichez simplement l'image unique
        <img src={pictures[0]} alt={housingData.title} />
      )}
      <div className="housing__infos">
        <div className="housing__infos__title">
          <h2>{housingData.title}</h2>
          <p>{housingData.location}</p>
          <div className="housing__infos__tags">
            {housingData.tags.map((tag, index) => (
              <div key={index} className="housing__infos__tags__tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="housing__infos__host">
          <span>
            {housingData.host.name.split(' ').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index !== housingData.host.name.split(' ').length - 1 && (
                  <br />
                )}
              </React.Fragment>
            ))}
          </span>
          <img src={housingData.host.picture} alt={housingData.host.name}></img>
        </div>
      </div>
    </div>
  )
}

export default HousingDetails
