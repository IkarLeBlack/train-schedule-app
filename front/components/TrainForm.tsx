import { useState } from 'react';
import { addTrain } from '@/services/train.service';

export default function TrainForm({ onAdd }: { onAdd: () => void }) {
    const [form, setForm] = useState({
        trainNumber: '',
        direction: '',
        station: '',
        departure: '',
        arrival: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addTrain(form);
        setForm({ trainNumber: '', direction: '', station: '', departure: '', arrival: '' });
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-2 md:grid-cols-2 mb-6">
            <input name="trainNumber" value={form.trainNumber} onChange={handleChange} placeholder="Train Number" className="border p-2" />
            <input name="direction" value={form.direction} onChange={handleChange} placeholder="Direction" className="border p-2" />
            <input name="station" value={form.station} onChange={handleChange} placeholder="Station" className="border p-2" />
            <input name="departure" type="datetime-local" value={form.departure} onChange={handleChange} className="border p-2" />
            <input name="arrival" type="datetime-local" value={form.arrival} onChange={handleChange} className="border p-2" />
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded">Add Train</button>
        </form>
    );
}
