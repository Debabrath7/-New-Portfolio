import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Achievements</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="bg-purple-100 p-4 rounded-full text-purple-600">
                <Trophy size={40} />
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Research Paper Publication</h3>
                <p className="text-gray-700 mb-4">
                  Published a Research Paper on Stock Price Analysis Through Machine Learning Models in The International 
                  Journal of Research and Analytical Reviews (IJRAR).
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">Oct 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;