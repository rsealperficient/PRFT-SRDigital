import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = ({filename, directory, content}) => {
  // Dynamically import component with provided properties
  const DynamicComp = dynamic(() => import('root/modules/'+directory+'/'+filename));
  // Return component with props
  return <DynamicComp {...content}/>
}

export default DynamicComponent;