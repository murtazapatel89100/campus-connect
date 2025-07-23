"use client";

import React from "react";
import "./StudentIdCard.css";

type Props = {
  name: string;
  program: string;
  rollNumber: string;
  dob: string;
};

const StudentIDCard: React.FC<Props> = ({ name, program, rollNumber, dob }) => {
  return (
    <>
      <div className="id-container w-full max-w-xs">
        {/* Flip Card */}
        <div className="flip-card w-full max-w-xs">
          <div className="flip-card-inner">
            {/* FRONT SIDE */}
            <div className="flip-card-front">
              <div className="accent-bar"></div>
              <div className="badge-hole"></div>
              <h1 className="bank-name">GHRISTU Student ID Card</h1>
              <div className="card-number">Roll No: {rollNumber}</div>
              <div className="card-info">
                <div className="card-holder">
                  <label>
                    {name}
                    <br />
                    <small>{program}</small>
                  </label>
                </div>
                <div className="valid-date">
                  <label>Date of Birth</label>
                  <br />
                  <span>{dob}</span>
                </div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div className="flip-card-back">
              <div className="back-buttons-container">
                <div className="buttons-row">
                  <button className="action-button login-button">Login</button>
                  <button className="action-button signup-button">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentIDCard;
