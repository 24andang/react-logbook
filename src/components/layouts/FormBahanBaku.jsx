import Button from '../elements/Button';
import Headline from '../elements/Headline';
import Input from '../elements/Input';
import { useState } from 'react';
import { LogbookApiURL } from '../configs/LogbookApi';

export default function FormBahanBaku() {
    const emptyData = {
        instansi: '',
        alamat_instansi: '',
        driver: '',
        nopol: '',
        ekspedisi: '',
        keterangan: '',
        petugas: ''
    };
    const [msg, setMsg] = useState('');

    // State untuk menyimpan input dari form
    const [formData, setFormData] = useState(emptyData);

    // Function untuk handle perubahan input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Function untuk handle submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman saat submit

        // Lakukan request POST ke API
        fetch(LogbookApiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                kategori: 'bahan', // Value tetap untuk kategori
                instansi: formData.instansi,
                alamat_instansi: formData.alamat_instansi,
                driver: formData.driver,
                nopol: formData.nopol,
                ekspedisi: formData.ekspedisi,
                keterangan: formData.keterangan,
                petugas: formData.petugas
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMsg('Data penerimaan bahan baku berhasil tersimpan.');
                setFormData(emptyData);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat menyimpan data');
            });
    };

    return (
        <div className='px-4'>
            <div className='flex justify-between items-center'>
                <Headline>Form Penerimaan Bahan Awal</Headline>
                <div className={`bg-emerald-500 px-4 py-2 text-white text-xl mx-10 rounded-lg ${msg ? 'visible' : 'invisible'}`}>{msg}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap my-4'>
                    <Input req={true} onChange={handleInputChange} value={formData.instansi} att='instansi'>Vendor / Supplier</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.alamat_instansi} att='alamat_instansi'>Alamat Vendor / Supplier</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.driver} att='driver'>Driver</Input>
                    <Input onChange={handleInputChange} value={formData.nopol} att='nopol'>Nopol</Input>
                    <Input onChange={handleInputChange} value={formData.ekspedisi} att='ekspedisi'>Ekspedisi / Cargo</Input>
                    <Input onChange={handleInputChange} value={formData.keterangan} att='keterangan'>Keterangan</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.petugas} att='petugas'>Petugas / Security</Input>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
    );
};