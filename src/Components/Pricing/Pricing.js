import React from "react"
import "./Pricing.scss"

const pricingDetails = [
    {item: "Prescribe Medications", tier1: false, tier2: true},
    {item: "Video Chats", tier1: false, tier2: true},
    {item: "Patient Portal", tier1: true, tier2: true},
    {item: "Personal Assistant App", tier1: true, tier2: true},
    {item: "Prescription Card", tier1: true, tier2: true},
    {item: "Whole Family Coverage", tier1: false, tier2: true},
    {item: "Pet Health Tracking", tier1: true, tier2: true},
    {item: "Medical Conceirge", tier1: true, tier2: true},
    {item: "Personalized Reports", tier1: false, tier2: true}
]
function Pricing(){
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
                    <h3>$24.99</h3>
                    <div className="perMonthText">Per month</div>
                </div>
                <div className="tierWrap tier2">
                    <h3>$44.99</h3>
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
            <div className="finalButtonWrap" data-aos="fade-in" data-aos-duration="800" data-aos-delay="100" data-aos-offset="10">
                <div className="detailWrap">.</div>
                <div className="tierWrap tier1">
                    Start 14days Trial
                </div>
                <div className="tierWrap tier2">
                    Start 14days Trial
                </div>
            </div>
        </div>
    )
}

export default Pricing;