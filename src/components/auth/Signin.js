import React, { Component } from 'react';
import SignupSvg from './SignupSvg';
import {Link} from 'react-router-dom';

export class Signin extends Component {
    render() {
        return (
            <div className="signup-container">
                <div className="signup-wrapper">
                    <div className="signup-par">
                        <SignupSvg/>
                        <div className="signup-div">
                            <h3>WELCOME BACK</h3>
                            <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore alias iure facilis distinctio
                             dolores molestias sint sunt minus earum excepturi fuga illo rerum minima tempora accusantium 
                             eligendi, facere quidem dignissimos?
                            </p>
                        </div>
                    </div>
                    <div className="signup-form">
                        <div className="form-div1">
                            <h4>Sign in</h4>
                            <p>New Ticket master? &nbsp;<Link onClick={this.props.openSignup}>Sign Up</Link></p>
                        </div>
                        <form className="form-div2">
                            <div className="form-sub-div1">
                                <label>Email Address</label>
                                <input type="email" name ="email"/>
                            </div>
                            <div className="form-sub-div2">
                                <label>Password</label>
                                <input type="password" name ="email"/>
                            </div>

                            <div className="form-sub-div4">
                                <div id="remember-cont">
                                    <div id="rememberme">
                                    <input  type="checkbox" name="features" value="auto_pilot"/> &nbsp;
                                    <span>Remember me</span>
                                    </div>
                                    <Link >Forget Password ?</Link>
                                    </div>
                                <p>
                                molestias sint sunt minus earum excepturi fuga illo rerum minima tempora now os accusantium eligendi, 
                                facere quidem dignissimos facere quidem dignissimos
                                facere quidem dignissimos?
                                </p>
                                <button>Next</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Signin
