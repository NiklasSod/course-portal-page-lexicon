import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import CourseCards from "./components/CourseCards";
import NewCourseView from "./components/NewCourseView";

function App() {
  return (
    <>
      <Header />
      <main>
        <InfoSection />
        <CourseCards />
        <NewCourseView />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
