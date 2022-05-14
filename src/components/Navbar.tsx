import * as React from "react"
import PropTypes from "prop-types"
import { Link, useTranslation } from 'gatsby-plugin-react-i18next';
import { FaTwitter, FaYoutube, FaGithub, FaSlack } from 'react-icons/fa';

import Logo from '../images/adoptium-logo-dark.svg';

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive}{...props} />
)

const Navbar = ({siteTitle}): JSX.Element => {
  const {t} = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple"
      style={{ height: '7rem', paddingTop: '1.25em', paddingBottom: '1.25em', position: 'relative', zIndex: '10000' }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-5">
          <Logo style={{ paddingLeft: '.2em', paddingRight: '.2em', height: '1.9em' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar"
                aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav bg-purple me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink
                to="/"
              >
                {t('navbar_home')}
              </ExactNavLink>
            </li>
            {/* <li className="nav-item">
              <ExactNavLink
                to="/marketplace"
              >
                Marketplace
              </ExactNavLink>
            </li> */}
            <li className="nav-item">
              <ExactNavLink
                to="/docs"
              >
                {t('navbar_documentation')}
              </ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink
                to="/docs/faq"
              >
                {t('navbar_faq')}
              </ExactNavLink>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navbar_projects')}
              </Link>
              <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                <li><ExactNavLink className="dropdown-item" to="/temurin">{t('navbar_temurin')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/aqavit">{t('navbar_aqavit')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/jmc">{t('navbar_jmc')}</ExactNavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navbar_furtherInformation')}
              </Link>
              <ul className="dropdown-menu bg-primary" aria-labelledby="navbarDropdown">
                <li><ExactNavLink className="dropdown-item" to="/news">{t('navbar_news')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/about">{t('navbar_about')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/members">{t('navbar_members')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/sponsors">{t('navbar_sponsors')}</ExactNavLink></li>
                <li><ExactNavLink className="dropdown-item" to="/temurin/buttons">Promote</ExactNavLink></li>
                <li><a className="nav-link" href="https://api.adoptium.net">{t('navbar_api')}</a></li>
                <li><a className="nav-link" href="https://blog.adoptium.net">{t('navbar_blog')}</a></li>
                <li><a className="nav-link" href="https://status.adoptium.net">{t('navbar_status')}</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="nav col-md-5 col-9 pb-4 justify-content-end list-unstyled d-flex hide-on-mobile p-3">
          <li className="ms-3"><a style={navbarIcon} target="_blank" rel="noopener noreferrer" href="https://twitter.com/adoptium"><FaTwitter size={25} /></a></li>
          <li className="ms-3"><a style={navbarIcon} target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/EclipseAdoptium"><FaYoutube size={25} /></a></li>
          <li className="ms-3"><a style={navbarIcon} target="_blank" rel="noopener noreferrer" href="https://github.com/adoptium"><FaGithub size={25} /></a></li>
          <li className="ms-3"><Link style={navbarIcon} target="_blank" rel="noopener noreferrer" to="/slack"><FaSlack size={25} /></Link></li>
        </ul>
      </div>
    </nav>
  )
}

const navbarIcon = ({
  color: 'rgba(255, 255, 255, 0.55)'
});

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
