import React, { useState } from 'react';
import './FAQ.css';


const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the TiffinTown app?",
       answer: "The Healthy Food app is an easy-to-use application designed to help users eat more healthy.It provides information and tools to support healthy eating habits."
    },
    {
      question: "Are the recipes on TiffinTown healthy and nutritious?",
      answer: "All recipes on TiffinTown are created by nutritionists and dietitians to ensure they are healthy, balanced, and nutritious. Each recipe includes detailed nutritional information so you can make informed choices."
    },
    /*{
      question: "What types of diets does Tiffin Town support?",
      answer: "drawing." 
    }, */
    {
      question: "What types of diets does Tiffin Town support?",
      answer: "TiffinTown supports a variety of diets including vegetarian, non-vegetarian, keto, high protein, and more"
    },
 
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='faq'>
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <h3>Have questions ?<br></br> You will find all your answers here !</h3>
      
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => handleToggle(index)}>
                {faq.question}
              </div>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;