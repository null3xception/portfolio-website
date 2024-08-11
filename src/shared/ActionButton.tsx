import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
   <AnchorLink
   className="rounded-md bg-black-75 text-white-100 px-10 py-2 hover:bg-brown-75 hover:text-white text-lg"
   onClick={() => setSelectedPage(SelectedPage.ContactMe)}
   href={`#${SelectedPage.ContactMe}`}
   >
    {children}
   </AnchorLink>
  )
}

export default ActionButton