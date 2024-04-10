"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { name: "home", href: "/" },
  { name: "login", href: "/login" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "register", href: "/register" },
  { name: "bill", href: "/bill" },
];

const Navbar = (props) => {
  const { open, setOpen } = props;

  const pathName = usePathname();
  return (
    <ul className="flex border-b container mx-auto">
      {navList.map((nav) => {
        const isActive = pathName.startsWith(nav.href);

        return (
          <li key={nav.name} className="-mb-px mr-1">
            <div>
              <Link
                href={nav.href}
                className={
                  isActive
                    ? "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-red-700 font-semibold"
                    : "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
                }
              >
                {nav.name}
              </Link>
            </div>
          </li>
        );
      })}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-0 "
      >
        Slider
      </button>
    </ul>
  );
};

export default Navbar;
