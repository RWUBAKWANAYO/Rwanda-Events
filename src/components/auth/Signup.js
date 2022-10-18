import React, { Component } from 'react';
import SignupSvg from './SignupSvg';
import {Link} from 'react-router-dom';

export class Signup extends Component {
 
    render() {
        return (
            <div className="signup-container">
                <div className="signup-wrapper">
                    <div className="signup-par">
                        <SignupSvg/>
                        <div className="signup-div">
                            <h3> YOUR ALL ACCESS PASS </h3>
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
                            <h4>Sign Up</h4>
                            <p>Are you already a ticket master? &nbsp;<Link onClick={this.props.openSignin}>Sign in</Link></p>
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
                            <div className="form-sub-div3">
                                <div className="form-input-cont">
                                    <div>
                                        <label>First name</label>
                                        <input type="text" name="name"/>
                                    </div>
                                    <div >
                                        <label>Last name</label>
                                        <input type="text" name="name"/>
                                    </div>
                                </div>
                                <div className="form-input-cont">
                                    <div >
                                        <label>Country</label>
                                        <input type="text" name="name" value="Rwanda"/>
                                    </div>
                                    <div >
                                        <label>ZIP Code</label>
                                        <input type="text" name="name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-sub-div4">
                                <Link>Forget Password ?</Link>
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

export default Signup
