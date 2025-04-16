import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProtectedRoute from '@/components/ProtectedRoute';
import TrainForm from '@/components/TrainForm';
import TrainTable from '@/components/TrainTable';
import { getTrains } from '@/services/train.service';
import { Train } from '@/types/train';

export default function TrainsPage() {
    const [trains, setTrains] = useState<Train[]>([]);
    const [showModal, setShowModal] = useState(false);

    const loadTrains = async () => {
        const data = await getTrains();
        setTrains(data);
    };

    useEffect(() => {
        loadTrains();
    }, []);

    const handleAdd = async () => {
        await loadTrains();
        setShowModal(false); 
    };

    return (
        <ProtectedRoute>
            <Layout>
                <h2 className="text-2xl font-bold mb-4">Train Schedule</h2>

                <button
                    onClick={() => setShowModal(true)}
                    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Add Train
                </button>

                <TrainTable trains={trains} onDelete={loadTrains} />

                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded shadow-xl w-full max-w-md relative">
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
                            >
                                &times;
                            </button>
                            <h3 className="text-lg font-semibold mb-4">Add Train</h3>
                            <TrainForm onAdd={handleAdd} />
                        </div>
                    </div>
                )}
            </Layout>
        </ProtectedRoute>
    );
}
