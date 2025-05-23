import React from 'react';

const ExtraSection = () => {
  return (<>
    <section className="px-4 py-12 ">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">🌱 Gardening FAQs</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-2xl transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-green-800">How often should I water my plants?</h3>
          <p className="text-sm text-gray-600 mt-2">Most indoor plants require watering once a week. Outdoor plants vary by season.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-2xl transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-green-800">What’s the best time to prune plants?</h3>
          <p className="text-sm text-gray-600 mt-2">Early spring is ideal for pruning most plants before new growth starts.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-2xl transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-green-800">Can I grow vegetables in containers?</h3>
          <p className="text-sm text-gray-600 mt-2">Yes! Tomatoes, peppers, herbs and even carrots grow well in pots.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-2xl transition hover:-translate-y-1">
          <h3 className="text-lg font-semibold text-green-800">How to naturally prevent pests?</h3>
          <p className="text-sm text-gray-600 mt-2">Use neem oil, vinegar spray or garlic to keep pests away naturally.</p>
        </div>
      </div>
    </section>
  </>
  );
};

export default ExtraSection;