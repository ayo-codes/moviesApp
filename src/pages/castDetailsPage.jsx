import React from 'react';
import { useParams } from 'react-router-dom';
import TemplatePersonPage from '../components/templatePeoplePage';
import CastDetails from '../components/castDetails';
import { useQueries } from 'react-query';
import { getPersonDetails } from '../api/tmdb-api';
import Spinner from '../components/spinner'

const CastDetailsPage = (props) => {
  const { id } = useParams(); 

const [ getPersonDetailQuery  ] = useQueries([
  {
    queryKey: ['person', {person_id: id}] ,
    queryFn: getPersonDetails
  },
])




  if (getPersonDetailQuery.isLoading) {
    return <Spinner />;
  }

  if (getPersonDetailQuery.isError) {
    return <h1>{error.message}</h1>;
  }

  console.log(getPersonDetailQuery);

  const person  = getPersonDetailQuery.data
  console.log(person)
  return (
    <TemplatePersonPage person={person} >
      <CastDetails person={person} />
    </TemplatePersonPage>

  )
}

export default CastDetailsPage;