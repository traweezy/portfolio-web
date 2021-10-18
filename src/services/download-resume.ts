// @ts-expect-error: Let the resume be
import Resume from '../assets/tyler-schumacher-resume.pdf';

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = Resume;
  link.download = Resume.substr(Resume.lastIndexOf('/') + 1);
  link.click();
};

export default downloadResume;
