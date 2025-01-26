import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

// Define the type for formValues
interface FormValues {
    name: string;
    class: string;
    section: string;
    roll_no: number;
}

// Define the props for the AddStudentModal component
interface AddStudentModalProps {
    showModal: boolean; // Whether the modal is visible
    setShowModal: Dispatch<SetStateAction<boolean>>; // Function to update modal visibility
    handleAddStudent: (e: React.FormEvent<HTMLFormElement>) => void; // Function to handle form submission
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void; // Function to handle input changes
    formValues: FormValues; // Form values for the student
}

const AddStudentModal: React.FC<AddStudentModalProps> = ({
    showModal,
    setShowModal,
    handleAddStudent,
    handleInputChange,
    formValues,
}) => {
    return (
        <div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-4">Add New Student</h2>
                        <form onSubmit={handleAddStudent}>
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
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddStudentModal;
