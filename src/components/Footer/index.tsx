import { Link } from 'gatsby';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { FaTwitter, FaYoutube, FaGithub, FaSlack } from 'react-icons/fa';
import RandomContributor from '../RandomContributor';
import LanguageSelector from '../LanguageSelector';
import './Footer.scss';
export interface DropDownState {
  active: number;
  isOpen: boolean;
  shouldDropDownBlur: boolean;
}

const Footer = (): JSX.Element => {
  const { t } = useTranslation()
  return (
    <>
    <section className="bottom-info">
        <RandomContributor />
    </section>
      <div className="bg-grey">
        <div className="container mt-5">
          <footer className="row row-cols-4 py-5 border-top">

            <div className="col-sm-3 col-12">
              <h5>{t('footer_eclipse_foundation')}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/" className="nav-link p-0 text-muted">{t('footer_about_us')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/foundation/contact.php" className="nav-link p-0 text-muted">{t('footer_contact_us')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/donate/adoptium" className="nav-link p-0 text-muted">{t('footer_donate')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/membership" className="nav-link p-0 text-muted">{t('footer_members')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/documents/" className="nav-link p-0 text-muted">{t('footer_governance')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/documents/Community_Code_of_Conduct.php" className="nav-link p-0 text-muted">{t('footer_code_of_conduct')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/artwork/" className="nav-link p-0 text-muted">{t('footer_logo_and_artwork')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/foundation/directors.php" className="nav-link p-0 text-muted">{t('footer_board_of_directors')}</a></li>
              </ul>
            </div>

            <div className="col-sm-3 col-12">
              <h5>{t('footer_legal')}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/legal/privacy.php" className="nav-link p-0 text-muted">{t('footer_privacy_policy')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/legal/termsofuse.php" className="nav-link p-0 text-muted">{t('footer_terms_of_use')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/legal/copyright.php" className="nav-link p-0 text-muted">{t('footer_copyright_agent')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/legal/epl-2.0/" className="nav-link p-0 text-muted">{t('footer_eclipse_public_license')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/legal/" className="nav-link p-0 text-muted">{t('footer_legal_resources')}</a></li>
              </ul>
            </div>

            <div className="col-sm-3 col-12">
              <h5>{t('footer_useful_links')}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://bugs.eclipse.org/bugs/" className="nav-link p-0 text-muted">{t('footer_report_bug')}</a></li>
                <li className="nav-item mb-2"><a href="https://help.eclipse.org/" className="nav-link p-0 text-muted">{t('footer_documentation')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/contribute/" className="nav-link p-0 text-muted">{t('footer_contribute')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/mail/" className="nav-link p-0 text-muted">{t('footer_mail_list')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/forums/" className="nav-link p-0 text-muted">{t('footer_forums')}</a></li>
                <li className="nav-item mb-2"><a href="https://marketplace.eclipse.org/" className="nav-link p-0 text-muted">{t('footer_marketplace')}</a></li>
              </ul>
            </div>

            <div className="col-sm-3 col-12">
              <h5>{t('footer_other')}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/ide/" className="nav-link p-0 text-muted">{t('footer_ide_and_tools')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/projects" className="nav-link p-0 text-muted">{t('footer_projects')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/workinggroups/" className="nav-link p-0 text-muted">{t('footer_working_groups')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/org/research/" className="nav-link p-0 text-muted">{t('footer_research')}</a></li>
                <li className="nav-item mb-2"><a href="https://www.eclipse.org/security/" className="nav-link p-0 text-muted">{t('footer_vulnerability')}</a></li>
                <li className="nav-item mb-2"><a href="https://status.eclipse.org/" className="nav-link p-0 text-muted">{t('footer_status')}</a></li>
              </ul>
            </div>
            
            <div className="col-sm-6 col-12 py-2 d-flex">
              <span className="text-muted">{t('footer_copyright')}</span>
            </div>
            <ul className="nav col-md-5 col-9 pb-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3"><a className="text-muted" href="https://twitter.com/adoptium"><FaTwitter size={25} /></a></li>
              <li className="ms-3"><a className="text-muted" href="https://www.youtube.com/c/EclipseAdoptium"><FaYoutube size={25} /></a></li>
              <li className="ms-3"><a className="text-muted" href="https://github.com/adoptium"><FaGithub size={25} /></a></li>
              <li className="ms-3"><Link className="text-muted" to="/slack"><FaSlack size={25} /></Link></li>
            </ul>
            <div className="col-12 d-flex ">
                <span className="text-muted">{t('footer_legal_notice')}</span>
            </div>
          </footer>
        </div>
      </div>
      <LanguageSelector />
    </>
  );
};

export default Footer;
