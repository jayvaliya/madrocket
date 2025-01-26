import { toast } from "react-toastify";
import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebaseConfig";

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);

    const [formValues, setFormValues] = useState<{
        email: string;
        password: string;
        confirmPassword: string;
    }>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onSignup = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!formValues.email || !formValues.password || formValues.password !== formValues.confirmPassword) {
            toast.error("Please check your input fields.");
            return;
        }

        const id = toast.loading("Creating your account...");

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password);
            const user = userCredential.user;

            toast.update(id, {
                render: `Welcome, ${user.email}! Your account has been created.`,
                type: "success",
                isLoading: false,
                autoClose: 5000,
            });

            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } catch (error) {
            console.error(error);
            let errorMessage = "Signup failed.";

            // @ts-expect-error - Handle different error codes
            if (error.code === "auth/email-already-in-use") {
                errorMessage = "This email is already in use.";

                // @ts-expect-error - Handle different error codes
            } else if (error.code === "auth/weak-password") {
                errorMessage = "Password should be at least 6 characters.";

                // @ts-expect-error - Handle different error codes
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "Please enter a valid email address.";
            }

            toast.update(id, {
                render: errorMessage,
                type: "error",
                isLoading: false,
                autoClose: 5000,
            });
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <section className="bg-gray-50 text-black">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    to="/signup"
                    className="flex items-center gap-3 mb-6 text-2xl font-semibold text-gray-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-blue-600"
                        x="0px"
                        y="0px"
                        width="40"
                        height="40"
                        fill="currentColor"
                        viewBox="0 0 64 64"
                    >
                        <path d="M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M29,42L18,31l2-3l9,6 l13.957-12L46,25L29,42z"></path>
                    </svg>
                    <span>Sign up to MustDoIt</span>
                </Link>
                <div className="w-full bg-white rounded-lg shadow-lg shadow-gray-400 md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create New Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onSignup}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    autoComplete="on"
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
                                    required
                                    onChange={handleChange}
                                    value={formValues.email}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                    onChange={handleChange}
                                    value={formValues.password}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                    onChange={handleChange}
                                    value={formValues.confirmPassword}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none bg-blue-600 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Create an account
                            </button>

                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{" "}
                                <Link to="/login" className="font-medium text-primary-600 hover:underline">
                                    Login here
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
