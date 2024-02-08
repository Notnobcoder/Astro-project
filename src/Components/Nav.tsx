import { Menu } from "lucide-react";

const Nav = () => {
  return (
    <div className="flex items-center justify-between ">
      <h5 className="font-[600] text-3xl">Tr.andreson</h5>
      <div className="hidden lg:block">
        <ul className="flex items-center gap-4 cursor-pointer">
          <li>Portfolio</li>
          <li>About</li>
          <li>Team</li>
          <li>Updates</li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <h4 className="border transition border-black p-2 rounded-full cursor-pointer hover:bg-black hover:text-white ">
          Contact
        </h4>
      </div>
      <Menu className="cursor-pointer font-bold lg:hidden" />
    </div>
  );
};

export default Nav;
