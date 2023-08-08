import React from 'react'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Carousel from '../../components/Carousel'
import jsonData from '../../datas/housing.json'

function HousingDetails() {
  // Récupère l'ID du logement à partir des paramètres d'URL
  const { id } = useParams()
  // Recherche le logement correspondant dans le fichier JSON à partir de l'ID
  const housingData = jsonData.find((item) => item.id === id)
  const navigate = useNavigate()

  useEffect(() => {
    // Si housingData n'existe pas, naviguez vers la page d'erreur
    if (!housingData) {
      navigate('/error')
    }
  }, [])

  if (!housingData) {
    return null
  }

  return (
    <div className="housing">
      <div className="housing__carousel">
        <Carousel images={housingData.pictures} />
      </div>
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
