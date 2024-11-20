export default function Input(props) {
    const { children, type = 'text', att = 'no-att', ph = ' ', value, onChange, req = false } = props;
    return (
        <div className='flex flex-col gap-2 w-1/2 p-2'>
            <label htmlFor={att}>{children}</label>
            <input type={type} name={att} id={att} value={value} placeholder={ph} onChange={onChange} required={req} className='border-slate-500 border p-1 rounded' />
        </div>
    );
};