import React from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  period: string;
  isPresent?: boolean;
  logo: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ 
  degree, 
  institution, 
  location, 
  period,
  isPresent = false,
  logo
}) => {
  return (
    <motion.div 
      className="mb-12 relative pl-10"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 bg-purple-600 rounded-full z-10"></div>
      
      {/* Timeline line */}
      <div className="absolute left-3 top-6 w-0.5 h-full bg-purple-200 -z-10"></div>
      
      <div className="bg-white rounded-lg shadow-md p-6 ml-6 transform transition-all duration-300 hover:shadow-lg hover:translate-x-1">
        <div className="flex items-center gap-4 mb-4">
          <img src={logo} alt={institution} className="w-12 h-12 object-contain" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{degree}</h3>
            <h4 className="text-lg text-purple-600">{institution}</h4>
          </div>
        </div>
        <p className="text-gray-600 mb-3">{location}</p>
        <div className="flex items-center text-gray-500">
          <Calendar size={16} className="mr-2" />
          <span>{period} {isPresent && <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Present</span>}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Education</h2>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <BookOpen size={28} className="text-purple-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-800">My Academic Journey</h3>
          </div>
          
          <EducationItem
            degree="Bachelor In Computer Science & Engineering (Specialization in Data Science)"
            institution="Lovely Professional University"
            location="Phagwara, Punjab"
            period="Aug 2022 - Present"
            isPresent={true}
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Lovely_Professional_University_logo.png/200px-Lovely_Professional_University_logo.png"
          />
          
          <EducationItem
            degree="Senior Secondary"
            institution="Kendriya Vidyalaya"
            location="Hyderabad, Telangana"
            period="April 2020 - May 2022"
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Kendriya_Vidyalaya_logo.png/200px-Kendriya_Vidyalaya_logo.png"
          />
          
          <EducationItem
            degree="Secondary"
            institution="Kendriya Vidyalaya"
            location="Hyderabad, Telangana"
            period="Mar 2012 - June 2022"
            logo="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Kendriya_Vidyalaya_logo.png/200px-Kendriya_Vidyalaya_logo.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;