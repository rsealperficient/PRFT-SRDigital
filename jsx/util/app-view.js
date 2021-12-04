import React from 'react';
import DynamicComponent from 'root/jsx/util/dynamica-component';

class AppView extends React.Component {

	constructor(props) {
    super(props);
  }

  render() {
    // Retrieve component data from template prop that was passed via server side fetch call
    // Build list of components that will be rendered
    let comps = this.props.template.map((component, index) => {
      return <DynamicComponent key={index} {...component}/>;
    })

    return (
      <div className="app-view">
        {comps}
      </div>
    )
	}
}
export default AppView;