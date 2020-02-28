import React, {useState} from 'react';
import './Shorten.css';
import {shortLink} from "../../store/actions/linkActions";
import {connect} from "react-redux";

const Shorten = (props) => {
    const linkInf = {
        originalUrl: ''
    };

    const [link, setLink] = useState(linkInf);

    const shortLink = async () => {
        await props.shortLink(link);
    };

    const Changer = (event) => {
        setLink({
            ...link,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className='container'>
            <div className="card">
                <h1>
                    link
                    <span>shortener</span>
                </h1>

                <p>enter the link in the field and click the button to get a shortened link</p>

                <div className="txtb">
                    <input type="text" placeholder="http://crm.attractor-school.com/" name='originalUrl' onChange={Changer}/>
                    <button type="button" onClick={shortLink}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>

                {props.link.link ?
                    <div>
                        <h4>Your Link:</h4>
                        <a href={'http://localhost:8000/' + props.link.link}>http://localhost:8000/{props.link.link}</a>
                    </div> : null
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    link: state.link.link
});

const mapDispatchToProps = dispatch => ({
    shortLink: (link) => dispatch(shortLink(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Shorten);