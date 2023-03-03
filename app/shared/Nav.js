import Link from "next/link";

const Nav = () => {
  return (
    <nav className="min-h-[70px] bg-white/10 border-b border-white/10 flex items-center justify-center">
      <ul className="flex justify-center items-center space-x-5">
        <li>
          <Link
            className="p-2 hover:bg-white/20 border border-transparent hover:border-white/20 rounded"
            href={`/`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-white/20 border border-transparent hover:border-white/20 rounded"
            href={`/about`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-white/20 border border-transparent hover:border-white/20 rounded"
            href={`/blog`}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="p-2 hover:bg-white/20 border border-transparent hover:border-white/20 rounded"
            href={`/contact`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
