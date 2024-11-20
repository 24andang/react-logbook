export default function Select(props) {
    const { children, att = 'no-att', label = 'nolabel', span = ' ', value, onChange } = props;
    return (
        <div className='flex flex-col gap-2 w-1/2 p-2'>
            <label htmlFor={att}>{label}</label>
            <select name={att} id={att} value={value} onChange={onChange} className='border-slate-500 border p-1 rounded'>
                {children}
            </select>
            <span className="text-xs italic text-slate-500">{span}</span>
        </div>
    );
};