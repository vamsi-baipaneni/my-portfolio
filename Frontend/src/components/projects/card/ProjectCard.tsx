import './index.scss';
import {getImageUrl} from '../../../../utils';

type ProjectType = {
    title: string;
    description: string;
    skills: string[];
    source: string;
    image: string;
  };
  
  type ProjectProps = {
    project: ProjectType;
  };

const ProjectCard = ({project}: ProjectProps) => {
  return (
    <div className='pro-card-container'>
        <img src={getImageUrl(project.image)} alt='project image' />
        <h2>{project.title}</h2>
        <span>{project.description}</span>
        <div className='pro-card-skills'>
            {
                project.skills.map((skill,i)=>(
                    <span key={i}>{skill}</span>
                ))
            }
        </div>
        <a target="_blank" href={project.source}>Source</a>
    </div>
  )
}

export default ProjectCard
