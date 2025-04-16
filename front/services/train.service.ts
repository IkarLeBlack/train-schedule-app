import { getToken } from '../utils/auth';

export const getTrains = async () => {
    const res = await fetch('http://localhost:3001/trains');
    return res.json();
};

export const addTrain = async (train: any) => {
    const res = await fetch('http://localhost:3001/trains', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(train),
    });
    return res.json();
};

export const updateTrain = async (id: number, updatedData: any) => {
    const res = await fetch(`http://localhost:3001/trains/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(updatedData),
    });
    return res.json();
};

export const deleteTrain = async (id: number) => {
    return fetch(`http://localhost:3001/trains/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });
};
