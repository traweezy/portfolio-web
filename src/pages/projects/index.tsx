import { useState, useEffect } from 'react';
import ExampleProjection from '../../assets/example-project.png';
import Project from './components/Project';
import Spinner from '../../components/spinner';
import Api from '../../services/api';

const api = new Api();

const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    if (!projects) {
      api.getProjects().then(returnedProjects => setProjects(returnedProjects));
    }
  }, [projects]);
  return (
    <div>
      {Array.isArray(projects) ? (
        projects
          .sort((projectX, projectY) => projectX.id - projectY.id)
          .map((project, index) => {
            const isLast = index === projects.length - 1;
            return (
              <div key={project.id} className={isLast ? '' : 'mb-32'}>
                <Project project={{ ...project, image: ExampleProjection }} />
                {isLast ? null : <hr className="mt-32" />}
              </div>
            );
          })
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Projects;
