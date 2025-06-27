// =========================================================================
// File: frontend/src/components/TopicDetail.js
// Description: The main view showing the selected topic's details, voting
//              buttons, results charts, and the comment section.
// =========================================================================
import React, { useState } from 'react';
import BarChart from './charts/BarChart';
import DoughnutChart from './charts/DoughnutChart';
import CommentSection from './CommentSection';

const TopicDetail = ({ topic, onVote, userVote }) => {
    const [chartType, setChartType] = useState('doughnut');

    if (!topic) {
        return <div className="flex items-center justify-center h-full text-gray-500">Select a topic to begin</div>;
    }

    return (
        <div className="p-6 md:p-8 overflow-y-auto h-full">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{topic.title}</h2>
            <p className="text-gray-600 mb-8 text-lg">{topic.description}</p>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Cast Your Vote</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                     {['support', 'oppose', 'neutral'].map(voteType => (
                         <button key={voteType} onClick={() => onVote(topic.id, voteType)} disabled={!!userVote} className={`px-6 py-4 text-lg font-bold rounded-lg transition-all duration-200 border-2 ${ userVote === voteType ? 'text-white scale-105 shadow-xl ' + (voteType === 'support' ? 'bg-teal-500 border-teal-600' : voteType === 'oppose' ? 'bg-red-500 border-red-600' : 'bg-amber-500 border-amber-600') : userVote ? 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed' : 'text-gray-800 bg-white hover:shadow-md hover:-translate-y-1 ' + (voteType === 'support' ? 'border-teal-400 hover:bg-teal-50' : voteType === 'oppose' ? 'border-red-400 hover:bg-red-50' : 'border-amber-400 hover:bg-amber-50') }`}>
                            {voteType.charAt(0).toUpperCase() + voteType.slice(1)}
                        </button>
                    ))}
                </div>
                {userVote && <p className="text-center mt-4 text-sm text-gray-600">Thank you for voting!</p>}
            </div>

            {userVote && (
                 <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">Live Results</h3>
                        <div className="flex items-center space-x-2 bg-gray-100 p-1 rounded-lg">
                             <button onClick={() => setChartType('doughnut')} className={`px-3 py-1 text-sm font-semibold rounded-md ${chartType === 'doughnut' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}>Proportion</button>
                             <button onClick={() => setChartType('bar')} className={`px-3 py-1 text-sm font-semibold rounded-md ${chartType === 'bar' ? 'bg-white text-blue-600 shadow' : 'text-gray-600'}`}>Distribution</button>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-80">
                        {chartType === 'bar' ? <BarChart data={topic.votes} /> : <DoughnutChart data={topic.votes} />}
                    </div>
                </div>
            )}
            
            <CommentSection topicId={topic.id} />
        </div>
    );
};

export default TopicDetail;