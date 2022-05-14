import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import VersionSelector from '../../components/VersionSelector'
import ChecksumModal from '../../components/ChecksumModal'
import TemurinArchiveTable from '../../components/TemurinArchiveTable'
import { getAssetsForVersion } from '../../hooks'

const TemurinReleases = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Seo title='Archive' />
      <section className='py-5 text-center container'>
        <div className='row py-lg-5'>
          <div className='col-lg-10 col-md-8 mx-auto'>
            <h1 className='fw-light'>{t('archive_title')}</h1>
            <div className='row align-items-center pt-2'>
              <div className='callout callout-default text-start'>{t('archive_notice_text1')}
                <Link to='/temurin/releases'>{t('archive_link_to_releases')}</Link>{t('archive_notice_text2')}{t('archive_notice_text3')}
                <br />
                <br />
                {t('archive_notice_text4')}
                <br />
                {t('archive_notice_text5')}
                <a href='https://adoptium.net'>{t('archive_link_to_home')}</a>{t('archive_notice_text6')}{t('archive_notice_text7')}
              </div>
              <div className='btn-group'>
                <Link to='/temurin/releases' className='btn btn-primary m-3'>
                  {t('archive_latest_releases_btn')} <FaArrowCircleRight />
                </Link>
                <Link to='/temurin/nightly' className='btn btn-secondary m-3'>
                  {t('archive_nightly_builds_btn')} <FaArrowCircleRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <VersionSelector updater={getAssetsForVersion} releaseType='ga' Table={TemurinArchiveTable} />
        <ChecksumModal />
      </section>
    </Layout>

  )
}



export default TemurinReleases

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
