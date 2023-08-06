import React from 'react'
import PropTypes from 'prop-types'



const TemplatePersonPage = ({children}) => {


  return (
    <div>
      <p> This is Coming from the Template People Page </p>
      {children}
    </div>

  )
}

TemplatePersonPage.propTypes = {}

export default TemplatePersonPage;