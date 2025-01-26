import React from "react";

// Define the Student type
interface Student {
    id: number;
    name: string;
    class: string;
    section: string;
    roll_no: number;
}

// Define the props for the StudentDeleteModal component
interface StudentDeleteModalProps {
    showDeleteModal: boolean;
    studentToDelete: Student | null;
    cancelDelete: () => void;
    confirmDelete: () => void;
}

const StudentDeleteModal: React.FC<StudentDeleteModalProps> = ({
    showDeleteModal,
    studentToDelete,
    cancelDelete,
    confirmDelete,
}) => {
    return (
        <div>
            {showDeleteModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl">
                        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                        <p className="mb-4">
                            Are you sure you want to delete the student{" "}
                            <span className="font-bold">{studentToDelete?.name}</span>?
                        </p>
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={cancelDelete}
                                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentDeleteModal;
