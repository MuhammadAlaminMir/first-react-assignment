import React, { useState, useEffect } from 'react';
import './App.css';
import { fakeData } from './fakeData/Data';
import Courses from './Components/Courses/Courses';
import Cart from './Components/Cart/Cart';

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        setCourses(fakeData);
    }, []);

    const [price, setPrice] = useState([]);

    const handleAddToCart = (coursePrice) => {
        const newPrice = [...price, coursePrice];
        setPrice(newPrice);
    };
    // console.log(price);
    return (
        <div className="App">
            <h1 className="header">Welcome To Our Online class</h1>
            <div className="main">
                <div className="courses">
                    {courses.map((course) => (
                        <Courses
                            key={course.id}
                            course={course}
                            handleAddToCart={handleAddToCart}
                        ></Courses>
                    ))}
                </div>
                <div className="cart">
                    <Cart coursePrice={price}></Cart>
                </div>
            </div>
        </div>
    );
}

export default App;
