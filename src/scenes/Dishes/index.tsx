import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
// import image5 from "@/assets/image5.png";
// import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Sashimi",
    image: image1,
  },
  {
    name: "Temaki",
    image: image2,
  },
  {
    name: "maki",
    image: image3,
  },
  {
  name: "nigiri",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Dishes = ({ setSelectedPage }: Props) => {
  return (
    <section id="dishes" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Dishes)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>POPULAR DISHES</HText>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 w-full overflow-hidden flex justify-center">
  <div className="mx-auto max-w-[1200px]">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.map((item: ClassType, index) => (
        <div key={`${item.name}-${index}`} className="flex justify-center">
          <Class
            name={item.name}
            description={item.description}
            image={item.image}
          />
        </div>
      ))}
    </div>
  </div>
</div>
      </motion.div>
    </section>
  );
};

export default Dishes;




