import React from 'react';
import { Award, Calendar } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  logo: string;
}

const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <img src={certification.logo} alt={certification.issuer} className="w-8 h-8 object-contain mr-3" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{certification.title}</h3>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{certification.issuer}</p>
      <div className="flex items-center text-gray-500 dark:text-gray-400">
        <Calendar size={16} className="mr-2" />
        <span>{certification.date}</span>
      </div>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "Machine Learning with Python",
      issuer: "Foxmula",
      date: "Aug 2023",
      logo: "C:\Users\Deba\Downloads\project-bolt-sb1-zrpakcxr\project\public\Foxmula.png"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "June 2023",
      logo: "C:\Users\Deba\Downloads\project-bolt-sb1-zrpakcxr\project\public\IBM.png"
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "July 2023",
      logo: "C:\Users\Deba\Downloads\project-bolt-sb1-zrpakcxr\project\public\Microsoft.jpeg"
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "June 2023",
      logo: "C:\Users\Deba\Downloads\project-bolt-sb1-zrpakcxr\project\public\Google.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;