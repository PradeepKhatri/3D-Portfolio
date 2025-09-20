import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeaturedCards from "./sections/FeaturedCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Layout from "./sections/Layout"

const App = () => {
  return (
    // <>
     <Layout>
      <NavBar />
      <Hero />
      <FeaturedCards />
      <ExperienceSection />
      {/* <ShowcaseSection /> */}
      <TechStack />
      {/* <Contact /> */}
      {/* <Footer /> */}
     </Layout>
    // </>
  )
}

export default App