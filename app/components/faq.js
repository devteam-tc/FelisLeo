'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus } from 'lucide-react'
import styles from '../styles/faq.module.css'

const faqData = [
  {
    question: 'What types of movies are shown at Leo Felis Cinemas?',
    answer: 'We showcase a variety of movies, including blockbusters, regional films, independent productions, and family-friendly options.'
  },
  {
    question: 'How can I book tickets?',
    answer: 'You can book tickets through our website, mobile app, or at the cinema box office. Online booking is available 24/7 with secure payment options.'
  },
  {
    question: 'Does the cinema have parking facilities?',
    answer: 'Yes, we offer ample parking space for our customers with both covered and open parking options.'
  },
  {
    question: 'Are snacks and beverages available?',
    answer: 'Yes, we have a wide selection of snacks, beverages, and concessions available at our food counter.'
  },
  {
    question: 'Does the cinema have special screenings or discounts?',
    answer: 'Yes, we offer special screenings for premieres and exclusive shows. We also have discount programs for students, seniors, and morning shows.'
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageSection}>
        <Image
          src="/about/faq-banner.png"
          alt="Cinema studio setup with lighting equipment"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className={styles.faqSection}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        
        {faqData.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              className={styles.question}
              onClick={() => toggleQuestion(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {faq.question}
              <span className={styles.iconWrapper}>
                {openIndex === index ? (
                  <Minus className={styles.icon} size={16} />
                ) : (
                  <Plus className={styles.icon} size={16} />
                )}
              </span>
            </button>
            
            <div
              id={`faq-answer-${index}`}
              className={`${styles.answer} ${openIndex === index ? styles.open : ''}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <div className={styles.answerContent}>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

