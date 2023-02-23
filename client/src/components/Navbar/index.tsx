import NavItem from "../NavItem";

import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
    <aside className="fixed top-0 bottom-0 left-0 z-10 w-56 max-h-screen">
      <section className="flex justify-center items-center h-1/4 bg-theme-900 shadow-xl shadow-inner">
        logo img
      </section>
      <nav className="h-3/4 p-5 border-r">
        <ul className="flex flex-col gap-3">
          <NavItem href={"/dashboard"} icon={<AiOutlineUser />}>
            Dashboard
          </NavItem>
          <NavItem href={"/conversas"} icon={<AiOutlineUser />}>
            Conversas
          </NavItem>
        </ul>
      </nav>
    </aside>
  );
}
