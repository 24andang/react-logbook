export default function Navbar() {
    return (
        <div className="flex justify-between relative py-4 px-8 z-10">
            <div className="fixed">
                <a href="#flyers">
                    <img src="logo/logo-dfa.png" alt="logo-dfa" className="h-6 hover:scale-110 transition-all" />
                </a>
            </div>
            <div className="fixed right-8 flex gap-4 text-slate-500">
                <a href="#forms" className="hover:text-emerald-500 hover:font-bold">Forms</a>
                <a href="#contacts" className="hover:text-emerald-500 hover:font-bold">Contacts</a>
            </div>
        </div>
    );
};