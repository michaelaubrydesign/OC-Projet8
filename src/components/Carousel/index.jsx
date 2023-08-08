import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  if (images.length === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt="" />
      </div>
    )
  }

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="" />
      <i className="fas fa-chevron-left" onClick={handlePrevImage}></i>
      <span>{`${currentImageIndex + 1}/${images.length}`}</span>
      <i className="fas fa-chevron-right" onClick={handleNextImage}></i>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Carousel
