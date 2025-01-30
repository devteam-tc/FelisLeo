import { Header } from './components/header'
import {Footer} from "./components/footer";
import Error404 from "./404/error404";


export const metadata = {
    title: "404 - Page Not Found",
    description: "The page you are looking for could not be found. Please check the URL or return to the homepage.",
  };
  
  export default function NotFound() {
    return (
      <div className="min-h-screen">
      <Header />
      <main>
        <Error404/>

      </main>
      <Footer />
    </div>
    );
  }
  