import { techsecy } from "../assets";
import styles, { layout } from "../style";

const Contact = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Technical Secreatry
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      For any queries related to Science and Technology Council (SNTC) 
      or any of its clubs, 
      please contact the Technical Secretary at the given details.
      </p>

      <br />

      <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        technical_secretary@students.iitmandi.ac.in 
      </button>

    </div>

    <div className={layout.sectionImg}>
      <img src={techsecy} alt="TechSecy" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Contact;
