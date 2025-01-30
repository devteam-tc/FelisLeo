'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, Twitter } from 'lucide-react'
import styles from '../styles/contact.module.css'
import { Header } from '../components/header'
import { Footer } from '../components/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const validateForm = () => {
    let formErrors = {}
    if (!formData.firstName) formErrors.firstName = 'First name is required'
    if (!formData.lastName) formErrors.lastName = 'Last name is required'
    if (!formData.email) {
      formErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      formErrors.email = 'Invalid email address'
    }
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      formErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.subject) formErrors.subject = 'Please select a subject'
    if (!formData.message) formErrors.message = 'Message is required'
    return formErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      setSubmitting(true)
      try {
        // Here you would typically send the data to your backend
        // For now we'll just simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        setSubmitMessage('Thank you for your message. We will get back to you soon!')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } catch (error) {
        setSubmitMessage('Something went wrong. Please try again later.')
      }
      setSubmitting(false)
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <main>
      <Header/>
      <div className={styles.container}>
      
      <div className={styles.wrapper}>
        <div className={styles.contactInfo}>
          <h1 className={styles.title}>Contact Information</h1>
          <p className={styles.subtitle}>Say something to start a live chat!</p>

          <div className={styles.infoItem}>
            <Phone size={20} />
            <span>+91 8919439603</span>
          </div>

          <div className={styles.infoItem}>
            <Mail size={20} />
            <span>info@techclouderp.com</span>
          </div>

          <div className={styles.infoItem}>
            <MapPin size={20} />
            <span>
              Office Unit No. 705, Jain Sadguru
              Capital Park, Image Gardens Road,
              VIP Hills, Madhapur, Hyderabad,
              Telangana, India-500081.
            </span>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" aria-label="Youtube"><Youtube size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={24} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={24} /></a>
          </div>
        </div>

        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.formGrid}>
            <div className={styles.nameFields}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                {errors.firstName && (
                  <span className={styles.error}>{errors.firstName}</span>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border rounded p-2"
                />
                {errors.lastName && (
                  <span className={styles.error}>{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border rounded p-2"
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="border rounded p-2"
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label>Select Subject?</label>
              <div className={styles.radioGroup}>
                {['Project Discussion', 'Story Discussion', 'General Inquiry', 'Others'].map((option) => (
                  <label key={option} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="subject"
                      value={option}
                      checked={formData.subject === option}
                      onChange={handleChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.subject && (
                <span className={styles.error}>{errors.subject}</span>
              )}
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="border rounded p-2"
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            {submitMessage && (
              <p className={`${styles.message} ${submitMessage.includes('error') ? styles.error : ''}`}>
                {submitMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className={styles.submitButton}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
      
    </div>
    <Footer/>
    </main>
  )
}

