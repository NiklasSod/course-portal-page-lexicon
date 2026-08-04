import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import CourseCards from "./components/CourseCards";
import CourseView from "./components/CourseView";

function App() {
  return (
    <div>
      <Header />
      <InfoSection />
      <CourseCards />
      <CourseView />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
