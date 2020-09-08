import React from 'react';
import './Courses.css';

const Courses = (props) => {
    const { course, name, picture, company, description, price } = props.course;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className="course">
            <div className="course-img">
                <img src={picture} alt="" width="90%" height="50%" />
            </div>
            <div>
                <h3>
                    Welcome to our{' '}
                    <big style={{ display: 'inline' }}> {course} </big>course
                </h3>
                <h3>Instructor : {name}</h3>
                <h4>Provide-by : {company}</h4>
                <p>{description}</p>
                <br />
                <h4>Price: ${price}</h4>
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                        handleAddToCart(price);
                    }}
                >
                    Enroll Now
                </button>
            </div>
        </div>
    );
};

export default Courses;
