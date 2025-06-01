import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData } from '../data/timeline';
import { GraduationCap, Shield, Award, Star, Target, CheckCircle } from 'lucide-react';

const TimelineSection = () => {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap />;
      case 'Shield':
        return <Shield />;
      case 'Award':
        return <Award />;
      case 'Star':
        return <Star />;
      case 'Target':
        return <Target />;
      case 'BadgeCheck':
        return <CheckCircle />;
      default:
        return <GraduationCap />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Career Timeline</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A journey through key milestones and positions in service to the nation.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <VerticalTimeline lineColor="rgba(59, 130, 246, 0.2)">
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              // date={item.year}
              iconStyle={{ 
                background: 'rgb(59, 130, 246)', 
                color: '#fff',
                boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.4)'
              }}
              contentStyle={{ 
                background: 'white', 
                color: '#333',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                border: 'none'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid white'
              }}
              icon={getIconComponent(item.icon)}
            >
              <h3 className="vertical-timeline-element-title text-sm font-bold text-primary-800">
                {item.year}
              </h3>
              <h3 className="vertical-timeline-element-title text-xl font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="vertical-timeline-element-subtitle mt-2 text-gray-600">
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineSection;