import React from 'react';
import { Code, Database, Wrench, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    logo: string;
  }>;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, skills }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50">
            <img src={skill.logo} alt={skill.name} className="w-6 h-6 object-contain" />
            <span className="text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo-generic.svg" },
        { name: "Java", logo: "https://www.oracle.com/a/ocom/img/cb71-java-logo.png" },
        { name: "SQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" }
      ]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: [
        { name: "MySQL", logo: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
        { name: "MongoDB", logo: "https://www.mongodb.com/assets/images/global/leaf.png" },
        { name: "PostgreSQL", logo: "https://www.postgresql.org/media/img/about/press/elephant.png" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      skills: [
        { name: "Power BI", logo: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png" },
        { name: "Tableau", logo: "https://www.tableau.com/sites/default/files/pages/tableaulogo_highres.png" },
        { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
      ]
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit size={24} />,
      skills: [
        { name: "TensorFlow", logo: "https://www.tensorflow.org/images/tf_logo_social.png" },
        { name: "PyTorch", logo: "https://pytorch.org/assets/images/pytorch-logo.png" },
        { name: "Scikit-learn", logo: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;