// import { Footer } from "../components/footer";
// import { Header } from "../components/header";
// import styles from './gallery.module.css'


// export const metadata = {
//     title: "Felis Leo Gallery - Stunning Movie Stills & Behind-the-Scenes",
//     description: "Explore Felis Leo exclusive gallery showcasing beautiful movie stills,movie first look posters, and promotional images from films.",
//     keywords: "home, page, example, about",
// }

// export default function movies() {
//     return (
//         <main className={styles.main}>
//             <Header/>
            // <section className={styles.hero}>
            // <h1 className={styles.heroTitle} style={{textAlign: 'left'}}>Gallery</h1>
            // </section>
//             <h1>Gallery</h1>
//             <p>Gallery page content</p>
//             <Footer/>
//         </main>
//     );
// }

import GalleryClient from './gallery-client';
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import styles from './gallery.module.css';

export const metadata = {
    title: "Felis Leo Gallery - Stunning Movie Stills & Behind-the-Scenes",
    description: "Explore Felis Leo exclusive gallery showcasing beautiful movie stills, movie first-look posters, and promotional images from films.",
    keywords: "home, page, example, about",
};

export default function GalleryPage() {
    return (
        <main className={styles.main}>
            <Header />
            <section className={styles.hero}>
            <h1 className={styles.heroTitle} style={{textAlign: 'left'}}>Gallery</h1>
            </section>
            <GalleryClient />
            <Footer />
        </main>
    );
}
