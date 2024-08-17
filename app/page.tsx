import Textbox from '@/app/ui/textbox';
import Image from 'next/image';

export default function Page() {
  // top image is desktop, bottom is mobile
  return (
    <>
      <div className="flex flex-row items-center gap-2 py-3 text-3xl md:text-4xl">
        <Image
          src="/leaves.png"
          alt="Two Leaves"
          className="hidden dark:invert md:block"
          width={100}
          height={100}
        />
        <Image
          src="/leaves.png"
          alt="Two Leaves"
          className="dark:invert md:hidden"
          width={75}
          height={75}
        />
        <h1>Whatcha doing?</h1>
      </div>

      <Textbox />
    </>
  )
}
