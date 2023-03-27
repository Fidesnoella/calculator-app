export default function Button({ handleClick, children, style }) {
    return (
        <button className={`border border-[#7b7a89] bg-[#dcdbdc] font-bold p-8 text-xl ${style}`} onClick={handleClick}>
            {children}
        </button>
    );
}
