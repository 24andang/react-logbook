import { useState } from 'react';
import FormTamu from '../gathers/FormTamu';
import ListTamu from '../gathers/ListTamu';

export default function BukuTamu() {
    const [onTab, setOnTab] = useState('form');

    return (
        <div className='px-4 relative'>
            <div className='absolute top-10 left-6'>
                <button onClick={() => setOnTab('form')} className={`hover:text-emerald-500 hover:underline underline-offset-8 ${onTab === 'form' ? 'text-emerald-500 font-bold' : 'text-slate-500 px-2'}`}>Form</button>
                <button onClick={() => setOnTab('list')} className={`hover:text-emerald-500 hover:underline underline-offset-8 ${onTab === 'list' ? 'text-emerald-500 font-bold' : 'text-slate-500 px-2'}`}>List</button>
            </div>
            {
                onTab === 'form' &&
                <FormTamu></FormTamu>
            }
            {
                onTab === 'list' &&
                <ListTamu></ListTamu>
            }
        </div >
    );
};