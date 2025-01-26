// ViewStudentModal.tsx
import React from "react";

interface Student {
    id: number;
    name: string;
    class: string;
    section: string;
    roll_no: number;
}

interface ViewStudentModalProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    student: Student | null;
}

const ViewStudentModal: React.FC<ViewStudentModalProps> = ({ showModal, setShowModal, student }) => {
    if (!showModal || !student) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-96 p-6 rounded shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Details</h2>
                <p className="text-gray-600 mb-2">
                    <strong>ID:</strong> {student.id}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Name:</strong> {student.name}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Class:</strong> {student.class}
                </p>
                <p className="text-gray-600 mb-2">
                    <strong>Section:</strong> {student.section}
                </p>
                <p className="text-gray-600 mb-4">
                    <strong>Roll No:</strong> {student.roll_no}
                </p>
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ViewStudentModal;
