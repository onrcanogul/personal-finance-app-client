import { useState } from "react";
import TextField from "@mui/material/TextField";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { login } from "../../services/user-service"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [emailOrUsername, setEmailOrUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigator = useNavigate();

    const handleClick = async () => {
        const isLoggedIn = await login({ usernameOrEmail: emailOrUsername, password: password });
        if (isLoggedIn)
            navigator("/");
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
                <Typography variant={"h4"} style={{ marginBottom: "20px" }}>Login</Typography>


                <div style={{ width: "100%", marginBottom: "15px" }}>
                    <TextField
                        label="Email or Username"
                        fullWidth
                        value={emailOrUsername}
                        style={{ marginBottom: "15px" }}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={password}
                        fullWidth
                        style={{ marginBottom: "10px" }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked onChange={() => setRememberMe(!rememberMe)} />}
                        label="Remember Me"
                        style={{ marginBottom: "15px" }}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            height: "3em",
                            fontSize: "clamp(14px, 1vw, 16px)",
                            flex: 1,
                            marginRight: "10px",
                        }}
                        onClick={handleClick}
                    >
                        Login
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

export default Login;

