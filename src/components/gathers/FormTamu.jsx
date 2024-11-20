import Button from '../elements/Button';
import Input from '../elements/Input';
import Select from '../elements/Select';
import Headline from '../elements/Headline';
import { useState } from 'react';
import { LogbookApiURL } from '../configs/LogbookApi';

export default function FormTamu() {
    const emptyData = {
        nama: '',
        alamat_instansi: '',
        hp: '',
        keterangan: '',
        penerima: '',
        titip: 'KTP', // Default value untuk Select
        petugas: ''
    }
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
                kategori: 'tamu', // Value tetap untuk kategori
                nama: formData.nama,
                alamat_instansi: formData.alamat_instansi,
                hp: formData.hp,
                keterangan: formData.keterangan,
                penerima: formData.penerima,
                titip: formData.titip,
                petugas: formData.petugas
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setMsg('Data tamu berhasil tersimpan.');
                setFormData(emptyData);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Terjadi kesalahan saat menyimpan data');
            });
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <Headline>Form Buku Tamu</Headline>
                <div className={`bg-emerald-500 px-4 py-2 text-white text-xl mx-10 rounded-lg ${msg ? 'visible' : 'invisible'}`}>{msg}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-wrap my-4'>
                    <Input req={true} onChange={handleInputChange} value={formData.nama} att='nama'>Nama</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.alamat_instansi} att='alamat_instansi'>Alamat / Instansi</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.keterangan} att='keterangan' ph="Interview, Penawaran, dll.">Keperluan</Input>
                    <Input req={true} onChange={handleInputChange} value={formData.penerima} att='penerima' ph="HRD, Purchasing, Bp. Andra, dll.">Bertamu dengan</Input>
                    <Input onChange={handleInputChange} value={formData.hp} att='hp'
                    >Telepon</Input>
                    <Select onChange={handleInputChange} value={formData.titip} att='titip' label='ID Card' span='Titipkan ID Card anda ke petugas.'>
                        <option value="KTP">KTP</option>
                        <option value="SIM">SIM</option>
                        <option value="ID Card Lainnya">ID Card Lainnya</option>
                    </Select>
                    <Input req={true} onChange={handleInputChange} value={formData.petugas} att='petugas'>Petugas / Security</Input>
                </div>
                <Button>Submit</Button>
                <span className='italic text-xs text-orange-400 font-bold ml-4'>Jangan lupa meminjam "Visitor Card" kepada petugas kami.</span>
            </form>
        </div>
    );
};