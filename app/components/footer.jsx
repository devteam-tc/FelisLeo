// import Link from 'next/link'
// import Image from 'next/image'
// import { Phone, Mail, MapPin } from 'lucide-react'
// import styles from '../styles/footer.module.css'

// export function Footer() {
//   return (
//     // <footer className="bg-white text-black border-t border-red-950">
//     //   <div className="container py-12">
//     //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//     //       <div>
//     //         <Link href="/" className="flex items-center gap-2 mb-4">
//     //           <Image src="/logo.png" alt="Falls Leo" width={40} height={40} />
//     //           <span className="font-bold text-xl">Falls Leo</span>
//     //         </Link>
//     //         <p className="text-gray-400">
//     //           Transforming visions into powerful stories through creative excellence.
//     //         </p>
//     //       </div>
//     //       <div>
//     //         <h3 className="font-semibold mb-4">Quick Links</h3>
//     //         <ul className="space-y-2 text-gray-400">
//     //           <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
//     //           <li><Link href="/services" className="hover:text-red-500">Services</Link></li>
//     //           <li><Link href="/portfolio" className="hover:text-red-500">Portfolio</Link></li>
//     //           <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
//     //         </ul>
//     //       </div>
//     //       <div>
//     //         <h3 className="font-semibold mb-4">Contact Info</h3>
//     //         <ul className="space-y-2 text-gray-400">
//     //           <li className="flex items-center gap-2">
//     //             <Phone className="w-4 h-4" />
//     //             <span>+1 234 567 890</span>
//     //           </li>
//     //           <li className="flex items-center gap-2">
//     //             <Mail className="w-4 h-4" />
//     //             <span>info@fallsleo.com</span>
//     //           </li>
//     //           <li className="flex items-center gap-2">
//     //             <MapPin className="w-4 h-4" />
//     //             <span>123 Cinema Street, Movie City</span>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //       <div>
//     //         <h3 className="font-semibold mb-4">Legal</h3>
//     //         <ul className="space-y-2 text-gray-400">
//     //           <li><Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
//     //           <li><Link href="/terms" className="hover:text-red-500">Terms of Service</Link></li>
//     //           <li><Link href="/cookies" className="hover:text-red-500">Cookie Policy</Link></li>
//     //         </ul>
//     //       </div>
//     //     </div>
//     //     <div className="mt-12 pt-8 border-t border-red-950/30 text-center text-gray-400">
//     //       <p>&copy; {new Date().getFullYear()} Falls Leo. All rights reserved.</p>
//     //     </div>
//     //   </div>
//     // </footer>

//     <footer className={styles.footer}>
//     <div className={styles.topSection}>
//       <div className={styles.column}>
//         <h4>Reach us</h4>
//         <p>
//           <span className={styles.icon}>📞</span> +91 8919439605
//         </p>
//         <p>
//           <span className={styles.icon}>✉️</span> info@techclouderp.com
//         </p>
//         <p>
//           <span className={styles.icon}>📍</span> Unit No. 705, Jain Sadguru
//           Capital Park, Hyderabad, Telangana, India-500081.
//         </p>
//       </div>

//       <div className={styles.column}>
//         <h4>Company</h4>
//         <p>Home</p>
//         <p>About us</p>
//         <p>Contact us</p>
//       </div>

//       <div className={styles.column}>
//         <h4>Legal</h4>
//         <p>Privacy Policy</p>
//         <p>Terms & Services</p>
//         <p>Terms of Use</p>
//       </div>

//       <div className={styles.column}>
//         <h4>Quick Links</h4>
//         <p>Announcements</p>
//         <p>Movies</p>
//         <p>Gallery</p>
//       </div>

//       <div className={styles.column}>
//         <h4>Social media</h4>
//         <p>Facebook</p>
//         <p>Instagram</p>
//         <p>Youtube</p>
//         <p>Twitter</p>
//       </div>
//     </div>

//     <div className={styles.bottomSection}>
//       <p>© 2024 felis Leo Cinemas by TechCloud ERP. All Rights Reserved</p>
//     </div>
//   </footer>
//   )
// }

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import styles from '../styles/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="Felis Leo Cinemas"
            width={200}
            height={80}
            priority
          />
        </div>
        <hr style={{marginBottom: '2rem'}}/>

        
        
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>Reach us</h3>
            <div className={styles.links}>
              <div className={styles.contactItem}>
                <div>
                <Phone size={18} />
                </div>
                <span>+91 9876543210</span>
              </div>
              <div className={styles.contactItem}>
                <div>
                <Mail size={18} />
                </div>
                <span>info@techclouderp.com</span>
              </div>
              <div className={styles.contactItem}>
                <div>
                <MapPin size={18} />
                </div>
                <span>Unit No. 705, Jain Sadguru Capital Park, Hyderabad, Telangana, India-500081.</span>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Company</h3>
            <div className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Legal</h3>
            <div className={styles.links}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Services</Link>
              <Link href="/terms-of-use">Terms of Use</Link>
            </div>
          </div>

          <div className={styles.section}>
            <div>
              <h3>Quick Links</h3>
              <div className={styles.links}>
                <Link href="/announcements">Announcements</Link>
                <Link href="/movies">Movies</Link>
                <Link href="/gallery">Gallery</Link>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <Link href="#" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube size={20} />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          © 2025 felis Leo Cinemas by TechCloud ERP. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

