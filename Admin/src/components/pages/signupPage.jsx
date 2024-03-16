import React from 'react';
import Authimg from '../images/auth.svg';
import { Outlet, Link } from "react-router-dom";
import '../css/signup.css';

export default function Signup() {
    return(
        <div className="background">
            <div className="signupbox">
               <div className="image">
                <img className='auth' src={Authimg} alt="not found" />
               </div>
                <div className="signform">
                  <h2 className="head">Signup</h2>
                  <form>
                    <div className='form-field'>
                        Name <br />
                        <div className="field input-group mb-1 border border-secondary">
                          <span className='input-group-text' >
                          <i class="bi bi-pen-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
                            </svg>
                          </i>
                          </span>
                          <input type="form-control" id="text" name="text" label="roll number" placeholder="your name" autofocus={true}/>
                        </div>
                    </div>
                    <div className='form-field'>
                        Username <br />
                        <div className="field input-group mb-1 border border-secondary">
                          <span className='input-group-text' >
                          <i class="bi bi-person-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                            </svg>
                          </i>
                          </span>
                          <input type="text" id="text" name="text" label="roll number" placeholder="your roll number" autofocus={true}/>
                        </div>
                    </div>
                    <div className='form-field'>
                        Email Id<br />
                        <div className="field input-group mb-1 border border-secondary">
                          <span className='input-group-text' >
                          <i class="bi bi-envelope-at-fill">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
                          </svg>
                          </i>
                          </span>
                          <input type="text" id="text" name="text" label="text" placeholder="username@gmail.com" autofocus={true}/>
                        </div>
                    </div>
                    <div className='form-field'>
                        Password <br />

                        <div className="field input-group mb-1 border border-secondary">
                          <span className='input-group-text' >
                            <i class="bi bi-eye-fill">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                              </svg>
                            </i>
                          </span>
                          <input type="password" id="password" name="password" label="Password" placeholder="••••••••••" />
                        </div>
                    </div>
                    <div className='form-field'>
                        Security Key<br />
                        <div className="field input-group mb-3 border border-secondary">
                          <span className='input-group-text' >
                          <i class="bi bi-key-fill">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            </svg>  
                          </i>  
                          </span>
                          <input type="password" id="password" name="password" label="roll number" placeholder="••••••••••" autofocus={true}/>
                        </div>
                    </div>
                    <div className='submit d-flex justify-content-center'>
                      <button type="button" class="btn btn-success">Sign-Up</button>
                    </div>
                  </form>
                  <p className='login'>
                    Already have a account? 
                    <Link className='link' to="/login">Login</Link>
                  </p>
                </div>
            </div>
        </div>
    )
}