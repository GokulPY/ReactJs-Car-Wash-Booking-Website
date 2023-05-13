import "./application.css";
import { useState} from "react";


function Application(){
    const [clickedButton, setClickedButton] = useState('Yet to Choose..');

    const handleButtonClick = (value) => {
        setClickedButton(value);
    }

    const [clickedButtons, setClickedButtons] = useState('Yet to Choose..');

    const handleButtonClicks = (value) => {
        setClickedButtons(value);
    }

    const [clickedsButtons, setClickedsButtons] = useState('Yet to Choose..');

    const handlesButtonClicks = (value) => {
        setClickedsButtons(value);
    }

    const [total, setTotal] = useState(0);

    const handleClick = (value) => {
        setTotal(prevTotal => prevTotal + value);
    }

    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    
    const handleSave = () => {
    const savedData = JSON.parse(localStorage.getItem("data")) || [];
        savedData.push({ username , phone });
        localStorage.setItem("data", JSON.stringify(savedData));
        setUsername("");
        setPhone("");
    };

    const handleClickks = (value) => {
        const buttonValue = value;
        localStorage.setItem('buttonValue', buttonValue);
    };

    return(
        <>
        <div className="headera">
            <img className="aimg" src="./Logoimg/washigniter.png" alt="Comapanylogo"/>
        </div>
        <div className="box1">
            <h3>Service Category</h3>
            <h1 className="listno1">1<span>/5</span></h1>
            <div>
            <h1 className="category1">Category</h1>
            <h4 className="category11">Select service category below</h4>
            </div>
            <button className="ss1" onClick={() => handleButtonClick("Car Wash")}>
                <img className="aimg1" src="./Logoimg/washimg.jpg" alt="Washimg"/>
            </button>
            <button className="ss2" onClick={() => handleButtonClick("Car Wrapping")}>
                <img className="aimg2" src="./Logoimg/wrapimg.jpeg" alt="Wrapimg"/>
            </button>
        </div>

        <div className="box2">
            <h3>Service List</h3>
            <h1 className="listno2">2<span>/5</span></h1>
            <div>
                <h1 className="category2">Services</h1>
                <h4 className="category22">Select services below</h4>
            <div className="service1">
                <div className="service11">
                    <h4 className="sah1">Engine oil change</h4>
                    <h4 className="sah2">1hr Mins</h4>
                    <h4 className="sah3">Price:<span> 999</span></h4>
                    <button onClick={() => handleClick(999)}>Select</button>
                </div>
                <h5 className="sh4">oil change</h5>
                <hr className="hr2"></hr>
            </div>

            <div className="service2">
                <div className="service22">
                    <h4 className="sh11">Water wash</h4>
                    <h4 className="sh22">10Mins</h4>
                    <h4 className="sh33">Price:<span> 499</span></h4>
                    <button onClick={() => handleClick(499)}>Select</button>
                </div>
                <h5 className="sh4">car wash</h5>
                <hr className="hr2"></hr>
            </div>

            <div className="service3">
                <div className="service33">
                    <h4 className="sh111">Washigniter</h4>
                    <h4 className="sh222">9hr Mins</h4>
                    <h4 className="sh333">Price:<span> 10000</span></h4>
                    <button onClick={() => handleClick(10000)}>Select</button>
                </div>
                <h5 className="sh4">https://www.igi-global.com/dictionary/cloud-service-brokerage/26600#:~:text=A definition of what a,or rules for its usage.</h5>
                <hr className="hr2"></hr>
            </div>

        </div>

        <div className="box3">
            <h3>Date & Time</h3>
            <h1 className="listno3">3<span>/5</span></h1>
            <div>
                <h1 className="category3">Block your time slot</h1>
                <h4 className="category33">Select date & time below</h4>
            </div>

            <div className="dt">
                <h3>Apr-4</h3>
                <h3>Apr-5</h3>
                <h3>Apr-6</h3>
                <h3>Apr-7</h3>
                <h3>Apr-8</h3>
                <h3>Apr-9</h3>
                <h3>Apr-10</h3>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-3");handleClickks("11.00AM | 2023-04-3")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-4");handleClickks("11.00AM | 2023-03-4")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-5");handleClickks("11.00AM | 2023-03-5")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-6");handleClickks("11.00AM | 2023-03-6")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-7");handleClickks("11.00AM | 2023-03-7")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-8");handleClickks("11.00AM | 2023-03-8")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.00AM"); handlesButtonClicks("2023-04-9");handleClickks("11.00AM | 2023-03-9")}}>11.00AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-3");handleClickks("11.30AM | 2023-04-3")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-4");handleClickks("11.30AM | 2023-03-4")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-5");handleClickks("11.30AM | 2023-03-5")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-6");handleClickks("11.30AM | 2023-03-6")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-7");handleClickks("11.30AM | 2023-03-7")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-8");handleClickks("11.30AM | 2023-03-8")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("11.30AM"); handlesButtonClicks("2023-04-9");handleClickks("11.30AM | 2023-03-9")}}>11.30AM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-3");handleClickks("12.00PM | 2023-04-3")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-4");handleClickks("12.00PM | 2023-03-4")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-5");handleClickks("12.00PM | 2023-03-5")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-6");handleClickks("12.00PM | 2023-03-6")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-7");handleClickks("12.00PM| 2023-03-7")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-0-4");handleClickks("12.00PM | 2023-03-8")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.00PM"); handlesButtonClicks("2023-04-9");handleClickks("12.00PM | 2023-03-9")}}>12.00PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-3");handleClickks("12.30PM | 2023-04-3")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-4");handleClickks("12.30PM | 2023-03-4")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-5");handleClickks("12.30PM | 2023-03-5")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-6");handleClickks("12.30PM | 2023-03-6")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-7");handleClickks("12.30PM | 2023-04-7")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-04-8");handleClickks("12.30PM | 2023-04-8")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("12.30PM"); handlesButtonClicks("2023-0-9");handleClickks("12.30PM | 2023-04-9")}}>12.30PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-3");handleClickks("1.00PM| 2023-04-3")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-04");handleClickks("1.00PM | 2023-04-04")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-05");handleClickks("1.00PM | 2023-04-05")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-06");handleClickks("1.00PM | 2023-04-06")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-07");handleClickks("1.00PM | 2023-04-07")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-08");handleClickks("1.00PM | 2023-04-08")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.00PM"); handlesButtonClicks("2023-04-09");handleClickks("1.00PM | 2023-04-09")}}>1.00PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-03");handleClickks("1.30PM | 2023-04-03")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-04");handleClickks("1.30PM | 2023-04-04")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-05");handleClickks("1.30PM | 2023-04-05")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-06");handleClickks("1.30PM | 2023-04-06")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-07");handleClickks("1.30PM | 2023-04-07")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-08");handleClickks("1.30PM | 2023-04-08")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("1.30PM"); handlesButtonClicks("2023-04-09");handleClickks("1.30PM | 2023-04-09")}}>1.30PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-03");handleClickks("2.00PM | 2023-04-03")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-04");handleClickks("2.00PM | 2023-04-04")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-05");handleClickks("2.00PM | 2023-04-05")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-06");handleClickks("2.00PM | 2023-04-06")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-07");handleClickks("2.00PM | 2023-04-07")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-08");handleClickks("2.00PM | 2023-04-08")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.00PM"); handlesButtonClicks("2023-04-09");handleClickks("2.00PM | 2023-04-09")}}>2.00PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-03");handleClickks("2.30PM | 2023-04-03")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-04");handleClickks("2.30PM | 2023-04-04")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-05");handleClickks("2.30PM | 2023-04-05")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-06");handleClickks("2.30PM | 2023-04-06")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-07");handleClickks("2.30PM | 2023-04-07")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-08");handleClickks("2.30PM | 2023-04-08")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("2.30PM"); handlesButtonClicks("2023-04-09");handleClickks("2.30PM | 2023-04-09")}}>2.30PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-03");handleClickks("3.00PM | 2023-04-03")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-04");handleClickks("3.00PM | 2023-04-04")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-05");handleClickks("3.00PM | 2023-04-05")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-06");handleClickks("3.00PM | 2023-04-06")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-07");handleClickks("3.00PM | 2023-04-07")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-08");handleClickks("3.00PM | 2023-04-08")}}>3.00PM</button>
                <button onClick={() => {handleButtonClicks("3.00PM"); handlesButtonClicks("2023-04-09");handleClickks("3.00PM | 2023-04-09")}}>3.00PM</button>
                <h3>Tuesday</h3>
                <h3>Wednesday</h3>
                <h3>Thurday</h3>
                <h3>Friday</h3>
                <h3>Saturday</h3>
                <h3>Sunday</h3>
                <h3>Monday</h3>
            </div>
        </div>

        <div className="box4">
            <h3>Summary</h3>
            <h1 className="listno4">4<span>/5</span></h1>
            <div>
                <h1 className="category4">Summary</h1>
                <h4 className="category44">Booking details below</h4>
            </div>

            <div className="icon">
                <div className="icon1">
                    <img className="iimg1" src="./Logoimg/calender.png" alt="Companycart"/>
                    <div className="dname1">
                    <h2>{clickedsButtons}</h2>
                    <h4>Appointment Date</h4>
                    </div>
                </div>
     
                <div className="icon2">
                    <img className="iimg2" src="./Logoimg/clock.png" alt="Companyclock"/>
                    <div className="dname2">
                    <h2>{clickedButtons}</h2>
                    <h4>Appointment Time</h4>
                    </div>
                        
                </div>
     
                <div className="icon3">
                    <img className="iimg3" src="./Logoimg/stopwatch.png" alt="Companystop"/>
                    <div className="dname3">
                    <h2>{clickedButton}</h2>
                    <h4>Service Category</h4>
                    </div> 
                </div>
     
                <div className="icon4">
                    <img className="iimg4" src="./Logoimg/cart.png" alt="Companycal"/>
                    <div className="dname4">
                    <h2>{total}</h2>
                    <h4>Total Cost</h4>
                    </div>        
                </div>
        </div>
            </div>

            <div className="box5">
                <h3>Summary</h3>
                <h1 className="listno5">5<span>/5</span></h1>
                <div>
                    <h1 className="category5">Basic Informations</h1>
                    <h4 className="category55">Fill out this fields below</h4>
                </div>

                <div className="inbox1">
                    <input placeholder="First Name *" type="text" value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                    <input placeholder="Last Name *" type="text"/>
                    <input placeholder="Company Name *" type="text"/>
                </div>

                <div className="inbox2">
                    <input placeholder="Email Id *" type="text"/>
                    <input placeholder="Phone *" type="text" value={phone}
                    onChange={(e) => setPhone(e.target.value)}/>
                </div>

                <div className="inbox3">
                    <input placeholder="Address *" type="text"/>
                    <input placeholder="Message *" type="text"/>
                </div>
            </div>

            <div className="box6">
                <h4>We will confirm your appointment with you by phone or e-mail within 24 hours of receiving your request.</h4>
                <h4><input type="checkbox"/>I agree Terms and Conditions</h4>
                <select>
                    <option>Select Payment Type</option>
                    <option>Cash</option>
                    <option>Bank Transfer</option>

                </select>
                <button onClick={handleSave}>Book Now</button>
            </div>
        </div>

        <div className="footer">
                <h4>© 2014 - 2023. <span className="footerspan">Washigniter</span> - All Right Reserved.</h4>
        </div>
        </>
    )
}
export {Application};