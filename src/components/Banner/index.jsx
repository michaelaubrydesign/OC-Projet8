function Banner({ title, backgroundImage, className }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxWidth: '100%',
  }

  return (
    <div className={`banner ${className}`} style={bannerStyle}>
      <div className="banner__shadow"></div>
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner
