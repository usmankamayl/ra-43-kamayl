import React from "react";
import PropTypes from 'prop-types';

class ProjectList extends React.Component {
  static propTypes = {
     projects: PropTypes.array.isRequired,
  }

  render() {
    const {projects} = this.props;
    return (
     <ul>{
       projects.map((project, i) => {
         // eslint-disable-next-line jsx-a11y/img-redundant-alt
         return (
           <li key={i}>
             <img src={project.img}  alt="photo"/>
           </li>
         )
       })
     }
     </ul>
    )
  }
}

export default ProjectList;
