'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function ImageModal({ images, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [images.length, onClose])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <button onClick={onClose} className="absolute top-4 right-4 text-white">
        <X size={24} />
      </button>
      <button
        onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        className="absolute left-4 text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <Image
        src={images[currentIndex] || "/placeholder.svg"}
        alt={`Gallery image ${currentIndex + 1}`}
        width={800}
        height={600}
        className="max-w-full max-h-[90vh] object-contain"
      />
      <button
        onClick={() => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
        className="absolute right-4 text-white"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}

