// src/pages/Login.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRecoilState } from "recoil";
import { isAuthenticatedState } from "../atoms/authAtom";
import { useNavigate, Link } from "react-router-dom";

const Login: React.FC = () => {
    const [formValues, setFormValues] = useState<{ email: string; password: string }>({
        email: "",
        password: "",
    });
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
    if (isAuthenticated) {
        console.log("User is already authenticated");
    }
    const navigate = useNavigate();
    const auth = getAuth();

    const onLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!formValues.email || !formValues.password) {
            toast.error("Please enter email and password.");
            return;
        }

        const id = toast.loading("Logging in...");

        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                formValues.email,
                formValues.password
            );
            toast.update(id, {
                render: `Welcome back, ${userCredential.user.email}!`,
                type: "success",
                isLoading: false,
                autoClose: 5000,
            });

            setIsAuthenticated(true);
            localStorage.setItem("user", JSON.stringify(userCredential.user));
            navigate("/");

        } catch {
            toast.update(id, {
                render: "Login failed.",
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
                <div className="w-full bg-white rounded-lg shadow-lg shadow-gray-400 md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Login to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={onLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    placeholder="name@company.com"
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
                                    onChange={handleChange}
                                    value={formValues.password}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none bg-blue-600 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                Login
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                New here?{" "}
                                <Link to="/signup" className="font-medium text-primary-600 hover:underline">
                                    Create account
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
