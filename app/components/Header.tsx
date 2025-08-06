'use client'

import Navbar from "./Navbar/Navbar";
import { ContentWrapper } from "./ui";

export default function Header() {
  return (
    <>
      <div className="relative bg-gray-800 w-full">
        <ContentWrapper>
          <div className="hidden md:flex justify-between items-center h-[72px]">
            <h1 className="text-2xl font-bold text-white">Exclusive</h1>
            <Navbar />
            <NavActions />
          </div>
          <div className="md:hidden flex justify-between items-center h-[72px]">
            <h1 className="text-2xl font-bold text-white">Exclusive</h1>
            <NavActions />
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

const NavActions = () => {
  return (
    <div className="flex items-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Login
      </button>
    </div>
  );
};
