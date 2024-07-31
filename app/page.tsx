import Image from 'next/Image'

export default function Page() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div>
                <h1>Start of a new journey</h1>
            </div>

            <div className="text-m text-center font-medium text-black">
                <div className="flex flex-row">
                    <Image
                      src="/leaves.png"
                      alt="Two Leaves"
                      className="dark:invert"
                      width={100}
                      height={24}
                      priority
                    />
                    <textarea name="user-text" cols="50" /> 
                </div>
            </div>
        </div>
    )
}
