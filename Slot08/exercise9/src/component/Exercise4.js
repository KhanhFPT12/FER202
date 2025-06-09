import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; 

const Exercise4 = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="row g-0 align-items-center">
                    
                    {/* Cột ảnh và tiêu đề */}
                    <div className="col-md-6 text-center py-4">
                        <img src="/images/fptlogo.jpg" alt="FPT Logo" className="img-fluid" style={{ maxHeight: '100px' }} />

                    </div>

                    {/* Cột thông tin */}
                    <div className="col-md-6 fpt-info">
                        <h5 className="fw-bold">Hoai Nguyen - FPT DaNang</h5>
                        <p className="mb-0">Mobile: 0982827763</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Exercise4;
