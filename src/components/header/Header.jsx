import Link from "next/link";
import Image from "next/image";
import React from "react";

import img from "../../../public/images/img.jpeg";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image src={img} alt="Logo" width={50} height={50}></Image>
        <nav>
          <ul>
            <li>
              <Link href="/" passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                Events
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" passHref>
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1>Events around the World</h1>
    </header>
  );
};

export default Header;
