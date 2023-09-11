import React from "react";

export default function Offers() {
  return (
    <>
        <div className="help-body" style={{backgroundColor: '#37718e', height: '100vh'}}>
            <div className="container py-4 px-3" style={{width: '70%'}}>
                <div className="py-4 mx-2 text-light">
                    <h4>Help & Support</h4>
                    <p style={{fontSize: '12px'}}>Let's take a step ahead and help you better</p>
                </div>
                <div className="bg-light border border-light px-3">
                    <div className="container bg-light border border-light d-flex p-0" style={{margin: '3rem 0'}}>
                        <div className="select p-3" style={{width: '27%', backgroundColor: '#edf1f7'}}>
                            <div className="">
                                <select class="form-select border-0 rounded-0" size="6" multiple aria-label="multiple select example" style={{backgroundColor: '#edf1f7'}}>
                                    <option className="py-3 border-0 border-bottom" value="1">
                                        <h3>Help With Orders</h3>
                                    </option>
                                    <option className="py-3 border-0 border-bottom" value="2">
                                        <h3>Partner Onboarding</h3>
                                    </option>
                                    <option className="py-3 border-0 border-bottom" value="3">
                                        <h3>Legal, Terms & Conditions</h3>
                                    </option>
                                    <option className="py-3 border-0 border-bottom" value="4">
                                        <h3>FAQ's</h3>
                                    </option>
                                    <option className="py-3 border-0 border-bottom" value="5">
                                        <h3>Genral issues</h3>
                                    </option>
                                    <option className="py-3" value="6">
                                        <h3>GoFoody one FAQ's</h3>
                                    </option>
                                </select>
                            </div>
                        </div>
                    <div className="container text-center p-3" style={{width: '73%'}}>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #3
                                </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #4
                                </button>
                                </h2>
                                <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #5
                                </button>
                                </h2>
                                <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Accordion Item #6
                                </button>
                                </h2>
                                <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
}
