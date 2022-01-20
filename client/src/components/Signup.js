import React from 'react';
import { NavLink } from 'react-router-dom';
 
const Signup =()=>{
    return(
        <div>
        <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                    <div className='signup-form'>
                        <h2 className='form-title'>signup</h2>
                        <form className='registration form' id="registration form">
                        <div className='form-group'>
                            <lable htmlFor="name">
                                <i className='zmdi zmdi-account materials-icons-name'></i>
                                 </lable>
                             <input type="text" name="name" id="name" autoComplete='off' placeholder='Your name'></input>
                        </div>

                        <div className='form-group'>
                            <lable htmlFor="email">
                                <i className='zmdi zmdi-email materials-icons-name'></i>

                              </lable>
                             <input type="text" name="email" id="email" autoComplete='off' placeholder='Your email'></input>
                        </div>

                        <div className='form-group'>
                            <lable htmlFor="phone">
                                <i className='zmdi zmdi-phone materials-icons-phone'></i>


                            </lable>
                             <input type="text" name="phone" id="phone" autoComplete='off' placeholder='Your phone'></input>
                        </div>

                        <div className='form-group'>
                            <lable htmlFor="work">
                                <i className='zmdi zmdi-slidshow  materials-icons-name'></i>


                            </lable>
                             <input type="text" name="work" id="work" autoComplete='off' placeholder='Your profession'></input>
                        </div>

                        <div className='form-group'>
                            <lable htmlFor="password">
                                <i className='zmdi zmdi-lock materials-icons-name'></i>


                            </lable>
                             <input type="text" name="password" id="password" autoComplete='off' placeholder='Your password'></input>
                        </div>

                        <div className='form-group'>
                            <lable htmlFor="cpassword">
                                <i className='zmdi zmdi-lock materials-icons-name'></i>


                            </lable>
                             <input type="text" name="cpassword" id="cpassword" autoComplete='off' placeholder='confirm your spassword'></input>
                        </div>
                        <div className='form-group form-button'>
                            <input type="submit" name="signup" id="signup" className='form-submit' value="register"/>
                        </div>


                        </form>
                        <div className='signup image'>
                            
                                
                                <NavLink to="login"></NavLink>
                            
                        </div>
                    </div>
                </div>

            </div>

        </section>
        </div>
    )
}
export default  Signup;