import { RiQuestionAnswerLine } from "react-icons/ri";
import { CiViewList } from "react-icons/ci";
import Link from 'next/link';
import "@/app/ui/globals.css";

export function GenButton(): any {
  return (
    <Link href="/" className="button">
      <RiQuestionAnswerLine size={32} />
      <h2 className="text-lg">Todo Gen</h2>
    </Link>
  );
}

export function ListButton(): any {
  return (
    <div className="button">
      <CiViewList size={32} />
      <h2 className="text-lg"> Todo List</h2>
    </div>
  );
}


