import Textbox from '@/app/ui/textbox';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="px-3 flex flex-row flex-1 justify-center items-center gap-2 text-4xl text-center">
        <Image
          src="/leaves.png"
          alt="Two Leaves"
          className="dark:invert"
          width={100}
          height={100}
          priority
        />
        <h1>Whatcha doing?</h1>
      </div>

      <Textbox />
    </div>
  )
}
