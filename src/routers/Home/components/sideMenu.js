import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className={'sideMenu'}>
                <div className="avatar">
                    <img src="https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/16002898_1422387621146778_1920426780164659761_n.jpg?_nc_cat=0&oh=b72d8742dd938127d9fa7cbd32a9c66e&oe=5B7880D4" alt=""/>
                </div>
                <div className={'list-menu'}>

                    <div className="list-menu-item">
                        <a href="#">Danh sách bạn bè đang online</a>
                        <div className="list-menu-item">
                            <a href="#">Danh sách bạn bè đang online</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
