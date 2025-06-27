// =========================================================================
// File: frontend/src/components/TopicSelector.js
// Description: The left-hand navigation bar for choosing a topic.
// =========================================================================
import React from 'react';

const TopicSelector = ({ topics, activeTopicId, onSelectTopic }) => (
  <nav className="p-4 bg-gray-50 h-full">
    <h2 className="text-lg font-bold text-gray-700 mb-4">Trending Topics</h2>
    <div className="space-y-2">
      {topics.map(topic => (
        <button
          key={topic.id}
          onClick={() => onSelectTopic(topic)}
          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${ activeTopicId === topic.id ? 'bg-blue-600 text-white shadow-lg transform -translate-y-0.5' : 'bg-white hover:bg-gray-100 text-gray-800 hover:shadow-md'}`}>
          <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mr-2 ${ topic.category === 'Technology' ? 'bg-blue-100 text-blue-800' : topic.category === 'Economy' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800' }`}>
            {topic.category}
          </span>
          <span className="font-semibold">{topic.title}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default TopicSelector;