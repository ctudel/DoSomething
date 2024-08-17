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
    <div className="flex justify-center items-center row-span-2 md:row-span-3">
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
        className="block md:hidden"
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
