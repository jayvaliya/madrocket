import React, { useState, ChangeEvent, FormEvent } from "react";
import AddStudentModal from "./AddStudentModal";
import StudentDeleteModal from "./StudentDeleteModal";
import ViewStudentModal from "./ViewStudentModal";
import EditStudentModal from "./EditStudentModal";

// Define types for student data
interface Student {
    id: number;
    name: string;
    class: string;
    section: string;
    roll_no: number;
}

const StudentList: React.FC = () => {
    const [data, setData] = useState<Student[]>([
        {
            id: 1,
            name: "John Doe",
            class: "X",
            section: "A",
            roll_no: 1,
        },
        {
            id: 2,
            name: "Doe Jane",
            class: "X",
            section: "B",
            roll_no: 2,
        },
        {
            id: 3,
            name: "John Smith",
            class: "X",
            section: "C",
            roll_no: 3,
        },
    ]);

    const [formValues, setFormValues] = useState<Omit<Student, "id">>({
        name: "",
        class: "",
        section: "",
        roll_no: 0,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: name === "roll_no" ? parseInt(value, 10) : value });
    };

    // view student logic
    const [showViewModal, setShowViewModal] = useState<boolean>(false);
    const [studentToView, setStudentToView] = useState<Student | null>(null);

    const handleViewStudent = (student: Student) => {
        setStudentToView(student);
        setShowViewModal(true);
    };

    // add student logic
    const [showAddStudentModal, setShowAddStudentModal] = useState<boolean>(false);

    const handleAddStudent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newStudent: Student = {
            id: data.length + 1,
            ...formValues,
        };

        setData([...data, newStudent]);

        setFormValues({ name: "", class: "", section: "", roll_no: 0 });
        setShowAddStudentModal(false);
    };

    // delete student logic
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [studentToDelete, setStudentToDelete] = useState<Student | null>(null);

    const handleDeleteConfirmation = (student: Student) => {
        setStudentToDelete(student);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (studentToDelete) {
            const updatedData = data.filter(student => student.id !== studentToDelete.id);
            setData(updatedData);

            setShowDeleteModal(false);
            setStudentToDelete(null);
        }
    };

    const cancelDelete = () => {
        setShowDeleteModal(false);
        setStudentToDelete(null);
    };



    // edit student logic
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const [studentToEdit, setStudentToEdit] = useState<Student | null>(null);

    const handleEditStudent = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (studentToEdit) {
            const updatedData = data.map(student =>
                student.id === studentToEdit.id ? { ...studentToEdit, ...formValues } : student
            );
            setData(updatedData);
            setShowEditModal(false);
        }
    };

    const handleEditClick = (student: Student) => {
        setStudentToEdit(student);
        setFormValues({
            name: student.name,
            class: student.class,
            section: student.section,
            roll_no: student.roll_no,
        });
        setShowEditModal(true);
    };





    const handlePreviousPage = () => {
        console.log("Previous page");
    };

    const handleNextPage = () => {
        console.log("Next page");
    };

    const page = 1;

    return (
        <div className="container mx-auto mt-5 md:mt-10 p-3">
            <div className="overflow-x-auto">
                {/* Add New Student Button */}
                <div className="flex justify-between items-center">
                    <div />
                    <button
                        onClick={() => setShowAddStudentModal(true)}
                        className="bg-blue-600 text-md font-semibold text-white px-3 py-2 rounded-md hover:bg-blue-700 my-2"
                    >
                        Add New Student
                    </button>
                </div>

                {/* Table */}
                <table className="w-full table-auto text-center border border-gray-300 rounded-lg">
                    <thead className="bg-gray-200 text-gray-800 font-semibold rounded-b-lg">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">ID</th>
                            <th className="px-4 py-2 border border-gray-300">Name</th>
                            <th className="px-4 py-2 border border-gray-300">Class</th>
                            <th className="px-4 py-2 border border-gray-300">Section</th>
                            <th className="px-4 py-2 border border-gray-300">Roll No</th>
                            <th className="px-4 py-2 border border-gray-300">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.length > 0 ? (
                            data.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-100 text-gray-800">
                                    <td className="px-4 py-2 border border-gray-300">{item.id}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.name}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.class}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.section}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.roll_no}</td>
                                    <td className="px-4 py-2 justify-center flex gap-2 border border-gray-300">
                                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            onClick={() => handleViewStudent(item)}>
                                            View
                                        </button>
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                            onClick={() => handleEditClick(item)}>
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteConfirmation(item)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-4 py-2 border border-gray-300 text-gray-500"
                                >
                                    No data available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center sm:py-px text-sm font-medium leading-5 text-white my-10">
                <button
                    onClick={handlePreviousPage}
                    className="bg-blue-500 px-3 py-2 font-bold rounded hover:bg-blue-600"
                >
                    Previous
                </button>
                <div className="text-base text-black">{`Page: ${page}`}</div>
                <button
                    onClick={handleNextPage}
                    className="bg-blue-500 px-3 py-2 font-bold rounded hover:bg-blue-600"
                >
                    Next
                </button>
            </div>

            {/* Add Student Modal */}
            <AddStudentModal
                showModal={showAddStudentModal}
                setShowModal={setShowAddStudentModal}
                handleAddStudent={handleAddStudent}
                handleInputChange={handleInputChange}
                formValues={formValues}
            />

            {/* Delete Confirmation Modal */}
            <StudentDeleteModal showDeleteModal={showDeleteModal} cancelDelete={cancelDelete} confirmDelete={confirmDelete} studentToDelete={studentToDelete} />

            <ViewStudentModal
                showModal={showViewModal}
                setShowModal={setShowViewModal}
                student={studentToView}
            />

            <EditStudentModal
                showModal={showEditModal}
                setShowModal={setShowEditModal}
                student={studentToEdit}
                handleInputChange={handleInputChange}
                handleEditStudent={handleEditStudent}
                formValues={formValues}
            />
        </div>
    );
};

export default StudentList;