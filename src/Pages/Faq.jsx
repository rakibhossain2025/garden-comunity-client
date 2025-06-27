import React, { useState } from 'react';
import Title from '../Components/Shared/Title';

const faqData = [
  {
    question: "How often should I water my plants?",
    answer: "Most indoor plants require watering once a week. Outdoor plants vary by season.",
  },
  {
    question: "What’s the best time to prune plants?",
    answer: "Early spring is ideal for pruning most plants before new growth starts.",
  },
  {
    question: "Can I grow vegetables in containers?",
    answer: "Yes! Tomatoes, peppers, herbs and even carrots grow well in pots.",
  },
  {
    question: "How to naturally prevent pests?",
    answer: "Use neem oil, vinegar spray or garlic to keep pests away naturally.",
  },
];

const extraTips = [
  "💧 Water early in the morning to reduce evaporation and help roots absorb better.",
  "🌻 Deadhead flowers regularly to promote more blooming.",
  "🍃 Use banana peels and eggshells as natural fertilizers in your garden beds.",
  "🌾 Mulch around plants to retain moisture and reduce weeds.",
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="px-4 max-w-5xl mx-auto">
      <Title text={"🌱 Gardening FAQs"} />
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {faqData.map(({ question, answer }, index) => (
          <div
            key={index}
            className="bg-green-50 dark:bg-[#1f2a1e] p-6 rounded-lg shadow hover:shadow-2xl transition hover:-translate-y-1 cursor-pointer"
            onClick={() => toggle(index)}
            aria-expanded={activeIndex === index}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') toggle(index);
            }}
          >
            <h3 className="flex justify-between items-center text-lg font-semibold text-green-800 dark:text-green-300">
              {question}
              <span className="text-2xl select-none">
                {activeIndex === index ? '-' : '+'}
              </span>
            </h3>
            {activeIndex === index && (
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">{answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="bg-green-100 dark:bg-[#223322] mb-12 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl lg:text-5xl my-4 font-bold mb-8 text-center">
          🌿 Quick Gardening Tips
        </h3>

        <ul className="list-disc list-inside space-y-3 text-green-700 dark:text-green-200 text-lg">
          {extraTips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
