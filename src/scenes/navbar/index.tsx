import Logo from "@/assets/logo.png";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const navbarBackground = isTopOfPage ? "" : "bg-brown-50 drop-shadow ";

    return <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} ml-10 mr-10 w-full`}>
                <div className={`${flexBetween} w-full gap-16`}>
                     {/* LEFT SIDE */}
                    <img alt="logo" src={Logo} width={200} height={100} className="mt-3"/>

                     {/* RIGHT SIDE */}
                     {isAboveMediumScreen ? (
                     <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-20 text-base font-bold`}>
                            <Link
                            page="HOME"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link
                            page="SERVICES"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link
                            page="SKILLS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                            />
                            <Link
                            page="PROJECTS"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        </div>
                        <div className={`${flexBetween} gap-8`}>
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Contact Me
                            </ActionButton>
                        </div>
                     </div >
                     ) : (                
                        <button
                        className="rounded-full p-2 bg-black-75 ml-10" 
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                        <Bars3Icon className="h-6 w-6 text-white" />
                        </button>
                    )}
                </div>
            </div>
        </div>
        {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-50 h-full w-[200px] drop-shadow-x bg-brown-25">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-black-75" />
                    </button>
                </div>
                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-lg font-bold">
                    <Link
                    page="HOME"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="SERVICES"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="SKILLS"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="PROJECTS"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                    <Link
                    page="CONTACT ME"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
            )}      
    </nav>;
}

export default NavBar