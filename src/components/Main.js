import React, {Component} from 'react';
import {label,input} from "react-bootstrap"
import travel from "../img/travel.jpg"
class Main extends Component {
    render() {
        const findtrip={
            width:"35%",
            margin: "auto",
            height:"78vh",
            backgroundImage: `url(${travel})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }
        return (

            <div className="card shadow mb-5 bg-white rounded" style={findtrip}>
                <div className="card-body">
                    <p className="card-title text-center shadow mb-5 rounded">Travel Booking Form</p>
                    <div className="icons text-center">

                        <i className="fa fa-taxi fa-2x" aria-hidden="true"></i>
                    </div>
                        <p className="searchText"><strong>Search For Cheap Travel</strong></p>
                    <div className="row">
                        <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">From City</option>
                            <option value="1">Baku</option>
                            <option value="2">Gabala</option>
                            <option value="3">Sumgait</option>
                        </select></div>
                        <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">To City</option>
                            <option value="1">Shamaki</option>
                            <option value="2">Ganca</option>
                            <option value="3">Oguz</option>
                        </select></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Anytime</option>
                            <option value="1">6:00 AM</option>
                            <option value="2">3:00 PM</option>
                            <option value="3">6:00 PM</option>
                        </select></div>
                        <div className="col-sm-6"><select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Anytime</option>
                            <option value="1">6:00 AM</option>
                            <option value="2">3:00 PM</option>
                            <option value="3">6:00 PM</option>
                        </select></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"> <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Kids(0-14)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> </div>
                        <div class="col-sm-4"> <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Adults(15-64)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> </div>
                        <div className="col-sm-4"> <select className="browser-default custom-select mb-4" id="select">
                            <option value="" disabled="" selected="">Seniors(65+)</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> </div>
                    </div> <a href="#" className="btn btn-primary  mt-5">Search</a>
                </div>
                </div>

        );
    }
}

export default Main;