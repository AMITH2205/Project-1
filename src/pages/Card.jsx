import React from "react";
import { GiBrutalHelm } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import '../index.css'

function Card (){
    return (
        <div className="container text-center">
            <div className="row g-4 my-4">
                <div className="col-md-4 col-lg-4">
                    <div className="card mb-4 p-4 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                        <GiBrutalHelm className="icon"/>
                        <div>
                            <h3 className="fs-1 ">230</h3>
                            <p className="fs-5">Number of Players Enrolled</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card p-4 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                        <RiTeamFill className="icon"/>
                        <div>
                            <h3 className="fs-1 ">23</h3>
                            <p className="fs-5">Number of Teams</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4">
                    <div className="card p-4 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                        <MdOutlinePayments className="icon"/>
                        <div>
                            <h3 className="fs-1 ">120/230</h3>
                            <p className="fs-5">Number of Payments done</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;
