"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navList = [
  { name: "home", href: "/" },
  { name: "login", href: "/login" },
  { name: "register", href: "/register" },
  { name: "bill", href: "/bill" },
];

const Navbar = () => {
  const pathName = usePathname();
  return (
    <ul className="flex border-b">
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
    </ul>
  );
};

export default Navbar;

