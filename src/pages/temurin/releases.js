import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { FaArrowCircleRight } from 'react-icons/fa'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import DownloadDropdowns from '../../components/DownloadDropdowns'
import DownloadTable from '../../components/TemurinDownloadTable'
import ChecksumModal from '../../components/ChecksumModal'
import { loadLatestAssets } from '../../hooks'
import { useTranslation } from 'gatsby-plugin-react-i18next'
const TemurinReleases = () => {
  const { t } = useTranslation()
  return (

  <Layout>
    <Seo title={t('releases_title')} />
    <section className='py-5 text-center container'>
      <div className='row py-lg-5'>
        <div className='col-lg-10 col-md-8 mx-auto'>
          <h1 className='fw-light'>{t('releases_header')}</h1>
          <div className='row align-items-center pt-3'>
            <div className='col-6 col-md-4'>
              <img
                src='../../images/temurin-light.png'
                width={120}
                alt='Temurin logo'
                className='img-fluid'
              />
            </div>
            <div className='col-12 col-sm-6 col-md-8'>
              <p className='text-start'>{t('releases_text1')}
                <a href='/supported-platforms'>{t('releases_link_supported_platforms')}</a>{t('releases_text2')}<a href='/support'>{t('releases_link_support')}</a>{t('releases_text3')}<a href='/docs'>{t('releases_link_docs')}</a>{t('releases_text4')}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='row align-items-center pt-3'>
        <p className='text-center'>{t('releases_filter_description')}
        </p>
      </div>
      <DownloadDropdowns updaterAction={loadLatestAssets} marketplace={false} Table={DownloadTable} />
      <ChecksumModal />
      <div className='row align-items-center pt-3'>
        <p className='text-center'>{t('releases_previous_releases')}
        </p>
        <div className='btn-group-vertical col-6 mx-auto'>
          <Link to='/temurin/archive' className='btn btn btn-primary mt-3'>{t('releases_archive_btn')} <FaArrowCircleRight />
          </Link>
        </div>
      </div>
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
