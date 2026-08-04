import Header from "./components/Header/Header";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/ContactForm/ContactForm";
import CourseCards from "./components/CourseCards/CourseCards";
import CourseView from "./components/CourseView/CourseView";

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
