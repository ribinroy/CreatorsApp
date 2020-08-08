import React, {useState} from "react"
import "./Pricing.scss"

const pricingDetails = [
    {item: "Prescribe Medications", tier1: false, tier2: true},
    {item: "Video Chats", tier1: false, tier2: true},
    {item: "Patient Portal", tier1: true, tier2: true},
    {item: "Personal Assistant App", tier1: true, tier2: true},
    {item: "Prescription Card", tier1: true, tier2: true},
    {item: "Whole Family Coverage", tier1: false, tier2: true},
    {item: "Pet Health Tracking", tier1: false, tier2: true},
    {item: "Medical Conceirge", tier1: true, tier2: true},
    {item: "Personalized Reports", tier1: false, tier2: true},
    {item: "Financial Products", tier1: true, tier2: true}
]

function Pricing(){
    const [popUpMetaData, setPopUpMetadata] = useState(true);

    return (
        <div className="pricingTableWrap" id="Pricing">
            <div className="heading"  data-aos="fade-in" data-aos-duration="800" data-aos-delay="100" data-aos-offset="10">
                <div className="detailWrap">
                    <h3>Pricing That Fits Your Purse</h3>
                </div>
                <div className="tierWrap tier1">
                    <h3>Tier I</h3>
                </div>
                <div className="tierWrap tier2">
                    <h3>Tier II</h3>
                </div>
            </div>
            <div className="subHeading"  data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" data-aos-offset="10">
                <div className="detailWrap">
                    <h3>You Enjoy:</h3>
                </div>
                <div className="tierWrap tier1">
                    <h3>$12.99</h3>
                    <div className="perMonthText">Per month</div>
                </div>
                <div className="tierWrap tier2">
                    <h3>$24.99</h3>
                    <div className="perMonthText">Per month</div>
                </div>
            </div>
            {   
                pricingDetails.map(function(object, i){
                   return (
                        <div key={i} className={"itemRow " + (pricingDetails.length <= i+1? "finalRow":"")} data-aos="fade-in" data-aos-duration="500" data-aos-delay={i * 50} data-aos-offset="10">
                            <div className="detailWrap">{object.item}</div>
                            <div className="tierWrap">
                                <div className={"tierIcon " + (object.tier1?"available":"unavailable")}></div>
                            </div>
                            <div className="tierWrap">
                                <div className={"tierIcon " + (object.tier2?"available":"unavailable")}></div>
                            </div>
                        </div>
                   )
                })
            }
            <div className="finalButtonWrap" data-aos="fade-in" data-aos-duration="800" data-aos-delay="400" data-aos-offset="10">
                <div className="detailWrap">.</div>
                <div className="tierWrap tier1" onClick={() => setPopUpMetadata({tier: "Tier 1", rate: 12.99})}>
                    Start 14days Trial
                </div>
                <div className="tierWrap tier2" onClick={() => setPopUpMetadata({tier: "Tier 2", rate: 24.99})}>
                    Start 14days Trial
                </div>
            </div>
            {
                popUpMetaData !== false && 
                <PaymentPopUp data={popUpMetaData} close={() => setPopUpMetadata(false)}/>
            }
        </div>
    )
}

function PaymentPopUp(props){
    const tierName = props.data.tier !== undefined?props.data.tier:"Tier #";
    const tierRate = props.data.rate !== undefined?props.data.rate:"##";
    
    const [cardDetails, setCardDetails] = useState({type: null, cardNo: "", expiryDate: "", cvv: ""});
    const [submitted, setSubmitted] = useState(false);

    function closeHandler(){
        if(props.close !== undefined)
            props.close();
    }

    function changeHandler(property, value){
        setCardDetails(
            {...cardDetails, [property]: value}
        )
    }

    return(
        <div className="popUpOverlay">
            <div className="popUpWrap">
                <div className="header">
                    <div className="tierName headerItem">
                        <h3>{tierName}</h3>
                    </div>
                    <div className="tierRate headerItem">
                        <h3>${tierRate}</h3>
                        <p>Per month</p>
                    </div>
                    <div className="closeButton" onClick={() => closeHandler()}>X</div>
                </div>
                <div className="body">
                    {
                        !submitted && 
                        <div>
                            <h4>Enter your payment details</h4>
                            <p>*Billing occurs at the end of the trial period</p>
                            <div className="cardDetailsWrap">
                                <p>How are you paying?</p>
                                <div className="payingTypeWrap">
                                    <label for="bank" className="inputRadioLabel">
                                        <input id="bank" checked={cardDetails.type === "Bank"} value="Bank" name="Bank" type="radio" onClick={(el) => changeHandler("type", el.currentTarget.value)}/>
                                        <span>Bank</span>
                                    </label>
                                    <label for="debitCards" className="inputRadioLabel">
                                        <input id="debitCards" checked={cardDetails.type === "Debit Cards"} value="Debit Cards" name="Debit Cards" type="radio" onClick={(el) => changeHandler("type", el.currentTarget.value)}/>
                                        <span>Debit Cards</span>
                                    </label>
                                </div>
                                <div className="cardDetails">
                                    <label className="inputLabel cardNumber">
                                        <input type="number" className="inputField" value={cardDetails.cardNo} placeholder="Card Number" onChange={(el) => changeHandler("cardNo", el.currentTarget.value)}/>
                                    </label>
                                    <label className="inputLabel cardExpiry">
                                        <span>Expiry Date</span>
                                        <input type="number" className="inputField" value={cardDetails.expiryDate} placeholder="12/24" onChange={(el) => changeHandler("expiryDate", el.currentTarget.value)}/>
                                    </label>
                                    <label className="inputLabel cardCVV">
                                        <input type="number" className="inputField" value={cardDetails.cvv} placeholder="CVV" onChange={(el) => changeHandler("cvv", el.currentTarget.value)}/>
                                    </label>
                                    <p>*Billing occurs at the end of the trial period</p>
                                </div>
                                <button onClick={() => setSubmitted(true)}>Start 14 days Trial</button>
                            </div>
                        </div>
                    }
                    {
                        submitted && 
                        <div className="submittedWrap">
                            <div className="punchIcon"></div>
                            <h4>Thank you for your payment</h4>
                            <p>We will get back to you via email shortly</p>
                            <button className="emailButton">Open Email Link</button>
                        </div>
                    }
                    <p>You payment is safe and secured by Stripe</p>
                    <div className="linksWrap">
                        <a href="#" className="link">Contact</a>
                        <a href="#" className="link">Refund policy</a>
                        <a href="#" className="link">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pricing;