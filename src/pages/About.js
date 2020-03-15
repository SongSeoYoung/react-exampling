import React from 'react';
import queryString from 'query-string'

const About =({match, location}) => {
  const query = queryString.parse(location.search)
  console.log(query)
  return (
    <div>
      <h2>About{match.params.name}</h2>
    </div>
  )
}

export default About