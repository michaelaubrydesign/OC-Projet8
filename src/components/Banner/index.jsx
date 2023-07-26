function Banner({ title, backgroundImage }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxWidth: '100%',
  }

  return (
    <div className="banner" style={bannerStyle}>
      <div className="banner__shadow"></div>
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner
