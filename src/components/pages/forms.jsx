import BukuTamu from "../layouts/BukuTamu";
import FormPaket from "../layouts/FormPaket";
import FormBahanBaku from "../layouts/FormBahanBaku";
import { useState, useEffect } from "react";

export default function Forms(props) {
    const [active, setActive] = useState('tamu');

    const fullDate = new Date();
    const date = fullDate.getDate();
    const monthIndex = fullDate.getMonth();
    const monthName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
    const month = monthName[monthIndex];

    return (
        <div className="flex h-screen" id="forms">
            <div className="w-1/4 border-r-2 flex flex-col gap-4 items-center py-16 overflow-hidden">
                <button className={`h-8 w-3/4 p-4 rounded-xl flex justify-center items-center text-xl border-2 hover:bg-emerald-700 hover:text-white hover:shadow-2xl ${active === 'tamu' ? 'bg-emerald-500 text-white' : 'bg-slate-400'}`} onClick={() => setActive('tamu')}>
                    Buku Tamu
                </button>
                <button className={`h-8 w-3/4 p-4 rounded-xl flex justify-center items-center text-xl border-2 hover:bg-emerald-700 hover:text-white hover:shadow-2xl ${active === 'paket' ? 'bg-emerald-500 text-white' : 'bg-slate-400'}`} onClick={() => setActive('paket')}>
                    Paket
                </button>
                <button className={`h-8 w-3/4 p-4 rounded-xl flex justify-center items-center md:text-xl border-2 hover:bg-emerald-700 hover:text-white hover:shadow-2xl ${active === 'bahan-baku' ? 'bg-emerald-500 text-white' : 'bg-slate-400'}`} onClick={() => setActive('bahan-baku')}>
                    Bahan Awal
                </button>
                <div className="bg-emerald-500 rounded-2xl p-4 text-white flex flex-col gap-2 mt-24">
                    <span className="font-extrabold text-9xl">{date}</span>
                    <span className="text-center font-bold">{month}</span>
                </div>
            </div>
            <div className="w-3/4 my-12">
                {active === 'tamu' &&
                    <BukuTamu></BukuTamu>
                }
                {active === 'paket' &&
                    <FormPaket></FormPaket>
                }
                {active === 'bahan-baku' &&
                    <FormBahanBaku></FormBahanBaku>
                }
            </div>
        </div>
    );
};