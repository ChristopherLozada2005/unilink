import React from "react";
 // Usa el archivo CSS que ya tienes para el estilo general
import logo from "../assets/logo-unilink.png"; // Importa el logo

const RegisterFormPage = () => {
    return (
        <div className="container">
            <div className="logo-container text-center">
                <img src={logo} alt="UniLink logo" />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="signup-form">
                        <button className="btn btn-outline-secondary w-100 mb-3">
                            <img src="https://www.google.com/favicon.ico" alt="Google logo" className="me-2" width="20" height="20" />
                            Sign up with Google
                        </button>
                        <button className="btn btn-outline-secondary w-100 mb-3">
                            <i className="bi bi-envelope me-2"></i>
                            Log in with Email
                        </button>
                        <div className="text-center text-muted mb-3">OR</div>
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Nombre" required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="lastname" placeholder="Apellido" required />
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="age" placeholder="Edad" required />
                            </div>
                            <div className="mb-3">
                                <select className="form-control" id="genere" required>
                                    <option value="" disabled selected>Selecciona tu género</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Password" required />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="agreeTerms" required />
                                <label className="form-check-label" htmlFor="agreeTerms">Acepto los Términos y la Política de Privacidad.</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Continuar</button>
                        </form>
                        <div className="text-center mt-3">
                            <span className="text-muted">¿Tienes una cuenta?</span>
                            <a href="#" className="text-decoration-none">Log In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterFormPage;