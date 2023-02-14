import { useState } from "react";
import Link from "./Link";
import { NavProps } from "../types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ActionButton from "../atom/ActionButton";

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: NavProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumSize = useMediaQuery("(min-width: 1060px)");
  const navBackground = isTopOfPage ? "" : "bg-primary-100";
  return (
    <nav>
      <div
        className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <h1 className="text-lg font-extrabold">ASTRO</h1>
            {/* <img src="" alt="logo" /> */}

            {/* right side */}
            {isAboveMediumSize ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <a href="/account">
                    <p>Sign in</p>
                  </a>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className=" rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumSize && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-screen w-[300px] bg-slate-400 drop-shadow-xl">
          {/* close */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-red-700 outline-dashed " />
            </button>
          </div>

          {/* menu */}
          <div className=" mx-8 flex flex-col gap-10 text-2xl">
            <div className="flex flex-col gap-10 px-12 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <p className=" transition duration-500 hover:text-gray-50">
              <a href="/account">
                    <p>Sign in</p>
                  </a>
              </p>
            </div>
            <ActionButton setSelectedPage={setSelectedPage}>
              <p className="text-lg">Become a Member</p>
            </ActionButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
