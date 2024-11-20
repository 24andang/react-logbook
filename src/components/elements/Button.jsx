export default function Button(props) {
    const { children, type = 'submit', } = props;
    return (
        <button type={type} className='bg-emerald-500 px-4 py-2 rounded-xl text-white hover:bg-emerald-700 ml-2'>{children}</button>
    );
};