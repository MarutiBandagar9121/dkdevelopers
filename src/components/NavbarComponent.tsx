"use client";
import {useState} from "react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import SalesEnquireyFormComponent from "./SalesEnquireyFormComponent";
import Image from "next/image";

export function NavbarComponent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }
  return (
    <div className="">
    <Navbar fluid rounded>
      <NavbarBrand href="/">
        <Image src="/dkdeveloperLogo4.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={50} height={40} />
        <span className="self-center whitespace-nowrap lg:text-xl text-sm font-semibold dark:text-white">D.K Developers</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button onClick={togglePopup}>Sales Enquiry</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Residential Projects</NavbarLink>
        <NavbarLink href="#">Commercial Projects</NavbarLink>
        <NavbarLink href="#">Contact Us</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    {isPopupOpen && <SalesEnquireyFormComponent onClose={togglePopup} />}
    </div>
  );
}

