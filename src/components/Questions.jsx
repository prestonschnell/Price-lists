import React from 'react'
import './Questions.css'

const Questions = () => {
  const faqs = [
    {
      question: "What is the difference between monthly and yearly plans?",
      answer: "Monthly plans are billed every month, while yearly plans are billed once per year at a discounted rate."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel your subscription from your account settings. Navigate to 'Billing' and click 'Cancel Subscription'."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can switch plans at any time from your account dashboard."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and other popular payment methods."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial for new users."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='questions-container'>
      <h1 id="questions-header">Frequently Asked Questions</h1>
      <div className="questions-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <p
              className="faq-question"
              onClick={() => handleToggle(idx)}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              {faq.question}
            </p>
            {openIndex === idx && (
              <p className="faq-answer" style={{ marginLeft: '1em' }}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions
