import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
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
          <div className="housing__infos__host__person">
            <span>
              {/* Séparer le nom de l'hôte en utilisant l'espace comme séparateur et mapper sur chaque partie */}
              {housingData.host.name.split(' ').map((part, index) => (
                <React.Fragment key={index}>
                  {/* Afficher la partie actuelle du nom */}
                  {part}

                  {/* Ajouter un élément <br /> après chaque partie, sauf la dernière */}
                  {index !== housingData.host.name.split(' ').length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </span>
            <img
              src={housingData.host.picture}
              alt={housingData.host.name}
            ></img>
          </div>
          <div className="housing__infos__host__rating">
            {[...Array(5)].map((_, index) => (
              <i
                key={index}
                className={`fas fa-star star-rating ${
                  index < housingData.rating
                    ? 'housing__infos__host__rating--active'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="housing__collapses">
        <div className="housing__collapses__left">
          <Collapse title="Description" content={housingData.description} />
        </div>
        <div className="housing__collapses__right">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {housingData.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default HousingDetails
