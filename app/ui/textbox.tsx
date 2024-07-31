export default function Textbox() {
    return (
        <div className="p-3 flex flex-row justify-center font-medium">
            <textarea className="p-3 border-2 rounded border-black" name="user-text" placeholder="Tell me what you're planning to right now..." cols="50" /> 
        </div>
    )
}
