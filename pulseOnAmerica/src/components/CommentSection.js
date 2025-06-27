// =========================================================================
// File: frontend/src/components/CommentSection.js
// Description: Handles the display and submission of comments.
// =========================================================================
import React, { useState, useEffect } from 'react';

const initialComments = {
  1: [{ id: 1, user: "TechSavvy", text: "Regulation is crucial before AI gets out of hand. We need oversight now." }, { id: 2, user: "FreeMarketFan", text: "Let innovation flourish! Government intervention will only slow down progress." }],
  2: [{ id: 3, user: "WorkLifeBalance", text: "A 4-day week would boost morale and productivity. It's a win-win!" }],
  3: [],
  4: [{id: 4, user: "FutureIsNow", text: "UBI could solve so many societal problems, from poverty to health." }, {id: 5, user: "EconoWhiz", text: "The economic implications are huge. Where would the money come from?" }]
};

const CommentSection = ({ topicId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // In a real app, you would fetch comments for the topicId here
    // fetch(`/api/topics/${topicId}/comments`)
    setComments(initialComments[topicId] || []);
  }, [topicId]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const commentToAdd = { id: Date.now(), user: "CurrentUser", text: newComment.trim() };
      // In a real app, you would POST this comment to your backend
      setComments([commentToAdd, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-12 pb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Discussion</h3>
      <div className="bg-white p-4 rounded-lg shadow-inner">
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" rows="3" placeholder="Share your thoughts..."></textarea>
          <button type="submit" className="mt-2 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">Post Comment</button>
        </form>
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map(comment => (
              <div key={comment.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="font-bold text-blue-700">{comment.user}</p>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-4">Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;