import React, { useState } from 'react';

const Sidebar = ({ lessons, currentLessonId, onSelectLesson }) => {
  const [completedLessons, setCompletedLessons] = useState({});

  const handleCheckboxChange = (lessonId) => {
    setCompletedLessons(prevState => ({
      ...prevState,
      [lessonId]: !prevState[lessonId]
    }));
  };

  return (
    <div className="sidebar">
      <ul>
        {lessons.map((lesson) => (
          <li key={lesson.id} className={lesson.id === currentLessonId ? 'active' : ''}>
            <div className="lesson-item">
              <input 
                type="checkbox" 
                checked={completedLessons[lesson.id] || false}
                onChange={() => handleCheckboxChange(lesson.id)}
              />
              <span onClick={() => onSelectLesson(lesson.id)}>{lesson.title}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
