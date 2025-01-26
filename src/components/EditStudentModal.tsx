import React, { ChangeEvent, FormEvent } from "react";

interface EditStudentModalProps {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    student: Student | null;
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleEditStudent: (e: FormEvent<HTMLFormElement>) => void;
    formValues: Omit<Student, "id">;
}

interface Student {
    id: number;
    name: string;
    class: string;
    section: string;
    roll_no: number;
}

const EditStudentModal: React.FC<EditStudentModalProps> = ({
    showModal,
    setShowModal,
    student,
    handleInputChange,
    handleEditStudent,
    formValues,
}) => {
    if (!showModal || !student) return null;

    return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4">Edit Student</h2>
                <form onSubmit={handleEditStudent}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formValues.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Class</label>
                        <input
                            type="text"
                            name="class"
                            value={formValues.class}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Section</label>
                        <input
                            type="text"
                            name="section"
                            value={formValues.section}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-2">Roll No</label>
                        <input
                            type="number"
                            name="roll_no"
                            value={formValues.roll_no}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border rounded-lg"
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStudentModal;
