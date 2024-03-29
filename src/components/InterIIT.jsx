import { apple, techmeet } from "../assets";
import styles, { layout } from "../style";

const InterIIT = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={techmeet} alt="TechMeet" className="w-[60%] h-[70%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Inter-IIT Tech Meet <br className="sm:block hidden" /> Acheivements
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Inter IIT Tech Meet is the annual technological competition organized by the Indian Institutes of Technology and qualifies as 
      the only technical event wherein all the IITs participate. This event is hosted in cycle by one of the participating institutions. 
      At end of each Tech Meet the next host IIT is chosen by mutual consensus.
      <br />
      IIT Mandi is proud to display its achievements and strides displayed by our brilliant contingents.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="link" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
      </div>
    </div>
  </section>
);

export default InterIIT;
