import React, { useState } from 'react'

function Collapse({ title, content }) {
  // Utilisation du hook useState pour gérer l'état d'expansion du contenu
  const [isExpanded, setIsExpanded] = useState(false)

  // Fonction appelée lorsqu'on clique sur le bouton d'expansion/réduction.
  const toggleCollapse = () => {
    // Utilisation de la fonction de mise à jour du useState avec une fonction pour maintenir l'état précédent.
    setIsExpanded((prevIsExpanded) => !prevIsExpanded)
  }

  return (
    <div className={`collapse ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <div className="collapse__header">
        <h3>{title}</h3>
        <div className="chevron-container" onClick={toggleCollapse}>
          <i
            className={`fa-solid fa-chevron-${isExpanded ? 'down' : 'up'}`}
          ></i>
        </div>
      </div>
      {isExpanded && <div className="collapse__content">{content}</div>}
    </div>
  )
}

export default Collapse
