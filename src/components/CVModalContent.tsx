import cvData from '../data/cv-data.json';

type CVModalContentProps = {
  section: string;
};

const CVModalContent = ({ section }: CVModalContentProps) => {
  switch (section) {
    case 'Personal Info':
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-green-400">{cvData.personalInfo.name}</h3>
          <p className="text-lg text-yellow-300">{cvData.personalInfo.title}</p>
          <p className="text-sm">{cvData.personalInfo.location}</p>
          <div className="space-y-2 text-sm">
            <p>📧 <a href={`mailto:${cvData.personalInfo.email}`} className="text-yellow-300 hover:text-green-400 transition-colors underline">{cvData.personalInfo.email}</a></p>
            <p>📱 <a href={`tel:${cvData.personalInfo.phone}`} className="text-yellow-300 hover:text-green-400 transition-colors underline">{cvData.personalInfo.phone}</a></p>
            <p>🔗 <a href={`https://${cvData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-green-400 transition-colors underline">{cvData.personalInfo.linkedin}</a></p>
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-green-400 mb-2">Summary</h4>
            <p className="text-sm leading-relaxed">{cvData.summary.text}</p>
          </div>
        </div>
      );
    
    case 'Skills':
      return (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {cvData.techStack.frontend.map((skill, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {cvData.techStack.backend.map((skill, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">DevOps</h4>
            <div className="flex flex-wrap gap-2">
              {cvData.techStack.devops.map((skill, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-3">Other</h4>
            <div className="flex flex-wrap gap-2">
              {cvData.techStack.other.map((skill, index) => (
                <span key={index} className="bg-gray-800 px-2 py-1 rounded text-xs">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      );
    
    case 'Experience':
      return (
        <div className="space-y-6">
          {cvData.experience.map((job, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <h4 className="text-lg font-semibold text-green-400">{job.position}</h4>
              <p className="text-yellow-300">{job.company}</p>
              <p className="text-sm text-gray-300">{job.period} {job.location && `| ${job.location}`}</p>
              <ul className="mt-2 space-y-1 text-sm">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="list-disc list-inside">• {resp}</li>
                ))}
              </ul>
              <div className="mt-2">
                <span className="text-xs text-gray-400">Stack: </span>
                <span className="text-xs">{job.stack.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      );
    
    case 'Education':
      return (
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-green-400">{cvData.education.institution}</h4>
          <p className="text-yellow-300">{cvData.education.degree}</p>
          <p className="text-sm text-gray-300">{cvData.education.period}</p>
        </div>
      );
    
    case 'Languages':
      return (
        <div className="space-y-4">
          {cvData.languages.map((lang, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-600 pb-2">
              <span className="text-green-400 font-semibold">{lang.language}</span>
              <span className="text-yellow-300 text-right">{lang.level}</span>
            </div>
          ))}
        </div>
      );
    
    default:
      return <p>Content not found.</p>;
  }
};

export default CVModalContent; 