import Image from 'next/image'

export default function Page() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-screen pr-3 flex flex-row justify-center items-center gap-2 text-4xl text-center">
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

            <div className="w-screen text-m text-center font-medium text-black">
                <div className="p-3 flex flex-row justify-center">
                    <textarea className="p-3 border-2 rounded border-black" name="user-text" placeholder="Tell me what you're planning to right now..." cols="50" /> 
                </div>
            </div>
        </div>
    )
}
