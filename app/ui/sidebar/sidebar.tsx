import { GenButton, ListButton } from "@/app/ui/sidebar/buttons";
import Image from 'next/image';

export default function Sidebar(): any {
  return (
    <div className="sidebar">
      <Logo />
      <Items />
    </div>
  );
}


function Logo(): any {
  return (
    <div className="row-span-3 col-start-2 col-span-2 flex justify-center items-center">
      <Image
        src="/chopper.png"
        alt="Chopper from one piece"
        className="hidden md:block"
        width={200}
        height={200}
      />

      <Image
        src="/chopper.png"
        alt="Chopper from one piece"
        className="md:hidden"
        width={100}
        height={100}
      />
    </div>
  );
}

function Items(): any {
  return (
    <div className="button-container">
      <GenButton />
      <ListButton />
    </div>
  );
}
