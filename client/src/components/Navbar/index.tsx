import NavItem from "../NavItem"

import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
  <aside className="sticky top-0 bottom-0 left-0 z-10 w-56 h-screen">
    <section className="flex justify-center items-center h-1/4 bg-theme-700 shadow-xl shadow-inner">
      logo img
    </section>
    <nav className="h-3/4 border-r">
      <ul>
        {/* <NavItem href={"/teste"} >teste</NavItem> */}
        <NavItem href={"/teste"} icon={<AiOutlineUser />}>teste</NavItem>
        {/* <NavItem href={"/1"} icon={FaBeer}>list 2</NavItem>
        <NavItem href={"/2"} icon={FaBeer}>list 3</NavItem>
        <NavItem href={"/3"} icon={FaBeer} >list 4</NavItem> */}
      </ul>
    </nav>
  </aside>)
}