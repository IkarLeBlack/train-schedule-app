import { useState } from 'react';
import { Train } from '@/types/train';
import { deleteTrain, updateTrain } from '@/services/train.service';

export default function TrainTable({ trains, onDelete }: { trains: Train[], onDelete: () => void }) {
    const [editingTrain, setEditingTrain] = useState<Train | null>(null);
    const [formData, setFormData] = useState<Partial<Train>>({});

    const handleDelete = async (id: number) => {
        await deleteTrain(id);
        onDelete();
    };

    const handleEditClick = (train: Train) => {
        setEditingTrain(train);
        setFormData(train);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === 'departure' || name === 'arrival' ? new Date(value) : value,
        }));
    };

    const handleUpdate = async () => {
        if (editingTrain) {
            await updateTrain(editingTrain.id, formData);
            setEditingTrain(null);
            onDelete();
        }
    };

    const handleCancel = () => setEditingTrain(null);

    return (
        <>
            <table className="table-auto w-full border">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Train #</th>
                    <th className="border px-4 py-2">Direction</th>
                    <th className="border px-4 py-2">Station</th>
                    <th className="border px-4 py-2">Departure</th>
                    <th className="border px-4 py-2">Arrival</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {trains.map((train) => (
                    <tr key={train.id}>
                        <td className="border px-4 py-2">{train.trainNumber}</td>
                        <td className="border px-4 py-2">{train.direction}</td>
                        <td className="border px-4 py-2">{train.station}</td>
                        <td className="border px-4 py-2">{new Date(train.departure).toLocaleString()}</td>
                        <td className="border px-4 py-2">{new Date(train.arrival).toLocaleString()}</td>
                        <td className="border px-4 py-2 space-x-2">
                            <button onClick={() => handleEditClick(train)} className="text-blue-600">Edit</button>
                            <button onClick={() => handleDelete(train.id)} className="text-red-600">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Модалка редактирования */}
            {editingTrain && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-xl w-full max-w-md relative">
                        <button
                            onClick={handleCancel}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-lg font-semibold mb-4">Edit Train</h3>
                        <div className="space-y-3">
                            <input
                                name="trainNumber"
                                value={formData.trainNumber ?? ''}
                                onChange={handleInputChange}
                                placeholder="Train Number"
                                className="w-full border rounded px-3 py-2"
                            />
                            <input
                                name="direction"
                                value={formData.direction ?? ''}
                                onChange={handleInputChange}
                                placeholder="Direction"
                                className="w-full border rounded px-3 py-2"
                            />
                            <input
                                name="station"
                                value={formData.station ?? ''}
                                onChange={handleInputChange}
                                placeholder="Station"
                                className="w-full border rounded px-3 py-2"
                            />
                            <input
                                name="departure"
                                type="datetime-local"
                                value={
                                    formData.departure
                                        ? new Date(formData.departure).toISOString().slice(0, 16)
                                        : ''
                                }
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                            <input
                                name="arrival"
                                type="datetime-local"
                                value={
                                    formData.arrival
                                        ? new Date(formData.arrival).toISOString().slice(0, 16)
                                        : ''
                                }
                                onChange={handleInputChange}
                                className="w-full border rounded px-3 py-2"
                            />
                        </div>

                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
