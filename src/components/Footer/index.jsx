import logo from '../../assets/logo.png'

function Footer() {
  return (
    <nav className="footer">
      <img src={logo} alt="Kasa" className="footer__kasa-logo" />
      <div className="footer__rights">© 2020 Kasa. All rights reserved</div>
    </nav>
  )
}

export default Footer
