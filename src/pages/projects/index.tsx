import { toast } from 'react-toastify';
import { useQuery } from 'react-query';

import ExampleProjection from '../../assets/example-project.png';
import Project from './components/Project';
import Spinner from '../../components/spinner';
import Api from '../../services/api';

const api = new Api();

const Projects = (): JSX.Element => {
  const { data, isLoading } = useQuery('projects', api.getProjects, {
    onError: (error: Error) => {
      toast.error(error.message, { position: 'bottom-right' });
    },
  });

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        data
          ?.sort(
            (projectX, projectY) => projectX.sortIndex - projectY.sortIndex,
          )
          ?.map((project: Project, index) => {
            const isLast = index === data.length - 1;
            return (
              <div key={project.id} className="my-16 lg:my-32">
                <Project project={{ ...project, image: ExampleProjection }} />
                {isLast ? null : <hr className="mt-16  lg:mt-32" />}
              </div>
            );
          }) ?? null
      )}
    </div>
  );
};
export default Projects;
