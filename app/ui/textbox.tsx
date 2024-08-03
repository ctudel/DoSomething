export default function Textbox() {
    

    return (
        <div className="p-3 flex flex-col items-center justify-center gap-3 font-medium">
            <input type="text" className="p-3 border-2 border-solid border-black rounded text-black" name="user-text" placeholder="What're you gunna do now?"/> 
            <button className="px-3 py-0.5 text-white font-bold bg-black rounded hover:text-black hover:bg-slate-300 dark:text-black dark:bg-white dark:hover:text-white dark:hover:bg-black" type="submit">Send -></button>
        </div>
    )
}
