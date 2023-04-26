import React from 'react'

function ContactUs(){
        return(
            <React.Fragment>
                <h2 className='text-center pt-5'>welcome to contact Us page</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 mt-5">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officia incidunt deserunt eum inventore quis delectus nostrum unde, dolor, veniam hic. Reiciendis, assumenda vitae in doloremque velit, totam recusandae molestias sunt laboriosam eum dolor ipsam? Non eum fugit libero nobis modi ab. Corporis consequuntur aliquam vero, deserunt eius molestias cumque!</p>
                        </div>
                        <div className="col-sm-6 mt-5">
                            <div className="mb-3 row">
                                <label for="username" className='col-sm-2 col-form-label'><b>User:</b></label>
                                <div className="col-sm-10">
                                    <input type='text' className='form-control' id='user'/>
                                </div>
                                <label for="password" className='col-sm-2 col-form-label'><b>Password:</b></label>
                                <div className="col-sm-10">
                                    <input type='text' className='form-control mt-2' id='password'/>
                                </div>
                                <label for="Number" className='col-sm-2 col-form-label'><b>Phone No:</b></label>
                                <div className="col-sm-10">
                                    <input type='text' className='form-control mt-2' id='number'/>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    
}
export default ContactUs;