import ActionButton from "@/components/atom/ActionButton";
import { HomepageProps, SelectedPage } from "@/components/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

const Homepage = ({ setSelectedPage }: HomepageProps) => {
  const isAboveMediumSize = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* main home */}
      <motion.div 
      className=" mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
      >
        {/* home-text */}
        <div className="z-10 mt-20 md:mt-32 md:basis-3/5">
          {/* heading */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7 }}
            variants={{hidden:{opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
          >
            <div className=" relative">
              <div className=" before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                {/* <img src="" alt="" /> */}
                <h1 className="text-6xl font-bold md:text-7xl">AstroGym</h1>
                <p className="font-dmsans text-3xl md:text-4xl">
                  evolutionary fitness.
                </p>
              </div>
            </div>
            <p className="text-md my-4">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* action buttons */}
          <motion.div 
          className="flex items-center gap-10"
          initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.9 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{hidden:{opacity: 0, x: -50}, visible: {opacity: 1, x: 0}}}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* home-image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="HomePage Graphic" />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumSize && (
        <div className="flex h-[100px] w-full items-center bg-primary-100 ">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-8">
              <img src={SponsorForbes} alt="Forbes" />
              <img src={SponsorFortune} alt="Fortune" />
              <img src={SponsorRedBull} alt="RedBull" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Homepage;
