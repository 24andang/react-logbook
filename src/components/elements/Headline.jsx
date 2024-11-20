export default function Headline(props) {
    const { children } = props;
    return (
        <h3 className='text-2xl text-emerald-500 font-bold ml-2 mb-8'>{children}</h3>
    );
};