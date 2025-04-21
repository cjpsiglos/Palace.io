import { useState } from "react";
import { loginUser } from "../../services/api"; // ✅ Use relative path
import { useRouter } from "next/router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const response = await loginUser(email, password);
        if (response) {
            localStorage.setItem("token", response.access_token);
            router.push("/dashboard");
        } else {
            alert("Login failed.");
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
