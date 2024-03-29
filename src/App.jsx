import styles from "./style";
import { InterIIT, Services, Contact, Fests, Footer, Navbar, SolarSystem } from "./components";

const App = () => (
  
  <div className="bg-primary w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <h1 className={styles.heading2}>Meet the clubs</h1>

    <div className={styles.solarSystem}>
        <SolarSystem />
    </div>
   
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
        <InterIIT />
        <Contact />
        <Fests />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
