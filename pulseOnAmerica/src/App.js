import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import TopicSelector from './components/TopicSelector';
import TopicDetail from './components/TopicDetail';

const initialTopics = [
  { id: 1, title: "AI Regulation in Tech", description: "Should the US government implement stricter regulations on the development and deployment of artificial intelligence by major tech companies?", category: "Technology", votes: { support: 1820, oppose: 950, neutral: 430 } },
  { id: 2, title: "Four-Day Work Week", description: "Should the US federally mandate or incentivize a transition to a four-day standard work week for non-essential industries?", category: "Economy", votes: { support: 2540, oppose: 1100, neutral: 360 } },
  { id: 3, title: "Space Exploration Funding", description: "Should NASA's budget for deep space exploration, including missions to Mars and beyond, be significantly increased?", category: "Science", votes: { support: 2150, oppose: 680, neutral: 870 } },
  { id: 4, title: "Universal Basic Income (UBI)", description: "Examining the feasibility and public opinion on implementing a nationwide Universal Basic Income program.", category: "Economy", votes: { support: 1590, oppose: 1820, neutral: 590 } }
];

export default function App() {
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userVotes, setUserVotes] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data from a backend API
    setTimeout(() => {
      setTopics(initialTopics);
      if (initialTopics.length > 0) {
        setSelectedTopic(initialTopics[0]);
      }
      setIsLoading(false);
    }, 500);
  }, []);

  const handleVote = useCallback((topicId, voteType) => {
    setTopics(prevTopics =>
      prevTopics.map(topic => {
        if (topic.id === topicId && !userVotes[topicId]) {
          const newVotes = { ...topic.votes, [voteType]: topic.votes[voteType] + 1 };
          return { ...topic, votes: newVotes };
        }
        return topic;
      })
    );
    setUserVotes(prev => ({ ...prev, [topicId]: voteType }));
  }, [userVotes]);
  
  const handleSelectTopic = useCallback((topic) => {
    const currentTopicState = topics.find(t => t.id === topic.id);
    setSelectedTopic(currentTopicState);
  }, [topics]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto mt-4">
        <div className="grid grid-cols-1 md:grid-cols-4 min-h-[calc(100vh-150px)] bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="col-span-1 border-r border-gray-200">
            {isLoading ? <div className="p-4 text-gray-500">Loading topics...</div> : <TopicSelector topics={topics} activeTopicId={selectedTopic?.id} onSelectTopic={handleSelectTopic} />}
          </div>
          <div className="col-span-3 bg-gray-50 h-[calc(100vh-150px)]">
             {isLoading ? <div className="flex items-center justify-center h-full text-gray-500">Loading...</div> : <TopicDetail topic={selectedTopic} onVote={handleVote} userVote={userVotes[selectedTopic?.id]} />}
          </div>
        </div>
      </main>
    </div>
  );
}