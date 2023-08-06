import React from 'react';
import TemplatePersonPage from '../components/templatePeoplePage';
import PropTypes from 'prop-types'
import CastDetails from '../components/castDetails';

const CastDetailsPage = props => {


  return (
    <TemplatePersonPage>
      <CastDetails />
    </TemplatePersonPage>

  )
}

castDetailsPage.propTypes = {}

export default CastDetailsPage;