export default function Flyers() {
    return (
        <div className="h-screen flex items-center justify-center relative" id="flyers">
            <div className="text-center">
                <h3 className="text-6xl font-jawa">Sugeng Rawuh</h3>
                <h3 className="text-4xl font-jawa my-6">wonten ing</h3>
                <p className="font-bold text-4xl">PT. Dion Farma Abadi</p>
            </div>
            <div className="overflow-hidden absolute right-44 top-16 h-1/4">
                <img src="images/ppic.png" className="hover:scale-110 transition duration-1000 h-3/4" alt="ppic" />
            </div>
            <div className="overflow-hidden absolute right-0 bottom-20 h-1/2">
                <img src="images/risk.png" className="hover:scale-110 transition duration-1000 h-full" alt="risk" />
            </div>
            <div className="overflow-hidden absolute left-0 top-40 h-1/2">
                <img src="images/rnd.png" className="hover:scale-110 transition duration-1000 h-1/2" alt="rnd" />
            </div>
            <div className="overflow-hidden absolute left-56 top-16 h-1/2">
                <img src="images/mixing.png" className="hover:scale-110 transition duration-1000 h-1/3" alt="mix" />
            </div>
            <div className="overflow-hidden absolute right-60 -bottom-36 h-1/2">
                <img src="images/safety-first.png" className="hover:scale-110 transition duration-1000 h-1/2" alt="safety" />
            </div>
        </div>
    );
};