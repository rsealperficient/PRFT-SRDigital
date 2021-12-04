import React from 'react';
import fetch from 'isomorphic-unfetch';
import APPView from 'root/jsx/util/app-view';

export async function getServerSideProps(context) {
  // Grab api param from url
  let { api } = context.query;
  
  // Set default if param is not provided
  api = (api ? 'test-api-'+api+'.json' : 'test-api-1.json');

  // Get template json data
  const data = await fetch("http://localhost:4000/static/json/"+api, {
      method: "GET",
      headers: {
        "Content-Type":"application/json"
      }
    })
  .then((response) => {
    return response.json();
  }).catch((error) => {
    return {error};
  });

  // Returns props to App
  return {
    props: {
      template: data.template
    }
  };
}

const App = (props) => (
  <APPView {...props} />
);

export default App;