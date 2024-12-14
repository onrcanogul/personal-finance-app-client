import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { register } from "../../services/user-service";

const Register = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");

    const handleClick = async () => {
        await register({ username: userName, password: password, confirmPassword: confirmPassword, email: email });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '20px' }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "500px",
                    padding: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    borderRadius: "8px"
                }}
            >
                <Typography variant={"h4"} style={{ marginBottom: "20px" }}>Register</Typography>

                <TextField label="Username" value={userName} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setUserName(e.target.value)} />
                <TextField label="Email" type="email" value={email} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" value={password} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setPassword(e.target.value)} />
                <TextField label="Confirm Password" type="password" value={confirmPassword} fullWidth style={{ marginBottom: "15px" }} onChange={(e) => setConfirmPassword(e.target.value)} />

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="contained"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)",
                            flex: 1,
                            marginRight: "10px",
                        }}
                        onClick={handleClick}
                    >
                        Register
                    </Button>
                    <Button
                        variant="outlined"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)",
                            flex: 1,
                        }}
                    >
                        Forgot Password
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Register;