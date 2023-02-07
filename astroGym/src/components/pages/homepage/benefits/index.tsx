import HText from "@/components/atom/HText";
import {
  BenefitProps,
  BenefitsProps,
  SelectedPage,
} from "@/components/types/types";
import { motion } from "framer-motion";
import { dataOfBenefit } from "./data/benefitsData";
import Benefit from "./Benefit";
import Description from "./Description";

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  return (
    <section id="benefits" className=" mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className=""
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-4 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="w- my-4 text-base">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {dataOfBenefit &&
            dataOfBenefit?.map((benefit: BenefitProps) => (
              <Benefit
                key={benefit?.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                setSelectedPage={setSelectedPage}
              />
            ))}
        </motion.div>
        <div className="">
          <Description setSelectedPage={setSelectedPage} />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

//the effect for the benefit
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
