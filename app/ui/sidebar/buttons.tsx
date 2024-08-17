import { FaHome } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Link from 'next/link';
import "@/app/ui/globals.css";

export function GenButton(): any {
  // First logo for desktop, second is mobile
  return (
    <Link href="/" className="button">
      <FaHome size={32} className="hidden md:block" />
      <FaHome size={24} className="md:hidden" />
      <h2 className="hidden text-md md:text-lg md:block">Home</h2>
    </Link>
  );
}

export function ListButton(): any {
  return (
    <Link href="" className="button">
      <CiViewList size={32} className="hidden md:block" />
      <CiViewList size={24} className="md:hidden" />
      <h2 className="hidden text-md md:text-lg md:block">Todo List</h2>
    </Link>
  );
}


