import React, { useState } from 'react'

function Collapse({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCollapse = () => {
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
