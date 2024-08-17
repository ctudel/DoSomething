import { RiQuestionAnswerLine } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import Link from 'next/link';
import "@/app/ui/globals.css";

export function GenButton(): any {
  // First logo for desktop, second is mobile
  return (
    <Link href="/" className="button">
      <RiQuestionAnswerLine size={32} className="hidden md:block" />
      <RiQuestionAnswerLine size={26} className="md:hidden" />
      <h2 className="text-md md:text-lg">Todo Gen</h2>
    </Link>
  );
}

export function ListButton(): any {
  return (
    <div className="button">
      <CiViewList size={32} className="hidden md:block" />
      <CiViewList size={26} className="md:hidden" />
      <h2 className="text-md md:text-lg">Todo List</h2>
    </div>
  );
}


