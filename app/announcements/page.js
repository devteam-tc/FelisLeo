'use client';

import { useState, useEffect } from 'react';
import { db, collection, getDocs, query, orderBy, limit, startAfter } from '../firebaseConfig';
import styles from '../announcements/announcementsSection.module.css';
import AnnouncementCard from '../components/announcement-card';
import Pagination from '../components/pagination';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const ITEMS_PER_PAGE = 6;

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, [currentPage]);

  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const announcementsRef = collection(db, 'announcements'); // Ensure this collection exists

      // Fetch total document count
      const totalDocsSnapshot = await getDocs(announcementsRef);
      const totalDocs = totalDocsSnapshot.size;
      setTotalPages(Math.ceil(totalDocs / ITEMS_PER_PAGE));

      // Construct query
      let q = query(announcementsRef, orderBy('createdAt', 'desc'), limit(ITEMS_PER_PAGE));
      if (lastVisible && currentPage > 1) {
        q = query(q, startAfter(lastVisible));
      }

      const querySnapshot = await getDocs(q);
      const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1]; // Save the last document for pagination
      setLastVisible(lastDoc);

      const fetchedAnnouncements = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <Header />

      <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Announcements</h1>
        </section>
      <div className={styles.container}>
        

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          <>
            <div className={styles.grid}>
              {announcements.map((announcement) => (
                <AnnouncementCard key={announcement.id} announcement={announcement} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
