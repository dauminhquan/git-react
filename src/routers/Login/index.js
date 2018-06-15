import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Home from './../Home'
import './css/style.css'
class Login extends Component {
    render() {
        return (
            <div className={'login'}>
                <div className="container container-login">
                    <div className={'logo-login'}>
                        <div className={'logo'}>
                           Login
                        </div>
                        <div className="un-line-logo"></div>
                    </div>
                    <form className={'form-group form-login'}>
                        <div className={'form-group'}>
                            <input type="text" className={'form-control'} placeholder={'Nhập tài khoản'}/>
                        </div>
                        <div className="form-group">
                            <input type="password" className={'form-control'} placeholder={'Nhập mật khẩu'}/>
                        </div>
                        <div className="form-group">
                            <Link to={Home} className={'btn btn-success'}>Đăng nhập</Link>

                        </div>
                        <div className={'form-group icon-login-with'}>
                            <a href="#"><i className={'fa fa-facebook-official'}></i></a>
                            <a href="#"><i className={'fa fa-google-plus-circle color-login-with-google'}></i></a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;
