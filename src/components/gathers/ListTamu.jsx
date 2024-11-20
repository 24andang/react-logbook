import { useState, useEffect } from "react";
import Headline from "../elements/Headline";
import { LogbookApiURL } from '../configs/LogbookApi';

export default function ListTamu() {
    const [dataTamu, setDataTamu] = useState([]);
    const [tamuToday, setTamuToday] = useState([]);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const today = `${year}-${month}-${day}`;

    useEffect(() => {
        fetch(LogbookApiURL)
            .then(response => response.json())
            .then(data => setDataTamu(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const filteredTamu = dataTamu.filter(item => item.kategori === 'tamu' && item.tanggal === today);
        setTamuToday(filteredTamu); // Mengupdate tamuToday dengan array hasil filter
    }, [dataTamu, today])

    return (
        <div className="overflow-auto grid grid-cols-2">
            <Headline>List Buku Tamu</Headline>
            <p className="font-bold mt-8 mx-auto">Hari ini : <span className="text-2xl text-emerald-500">{tamuToday.length}</span> tamu.</p>
            <div className="border-2 rounded-2xl p-4 mt-8 col-span-2">
                <ul className="flex justify-around font-bold border-b-2 pb-4">
                    <li className="w-1/5 text-center">Nama</li>
                    <li className="w-1/5 text-center">Alamat / Instansi</li>
                    <li className="w-1/5 text-center">Jam Kedatangan</li>
                    <li className="w-1/5 text-center">Keperluan</li>
                </ul>
                {tamuToday.map((item) => (
                    <ul className="flex justify-around my-2" key={item.id}>
                        <li className="w-1/5 text-center">{item.nama}</li>
                        <li className="w-1/5 text-center">{item.alamat_instansi}</li>
                        <li className="w-1/5 text-center">{item.jam_masuk}</li>
                        <li className="w-1/5 text-center">{item.keterangan}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
};
