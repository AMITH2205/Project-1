import Layout from "../layout/Layout";

function User() {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 p-5">
                        <div class="mb-4 row">
                            <label for="name" class="col-sm-4 col-form-label">Name</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="name" />
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="dob" class="col-sm-4 col-form-label">DOB</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="dob" />
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="name" class="col-sm-4 col-form-label">Membership</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="email" class="col-sm-4 col-form-label">Email</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="email" />
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="phone" class="col-sm-4 col-form-label">Phone</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="phone" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 p-5">
                        <div class="mb-4 row">
                            <label for="address1" class="col-sm-4 col-form-label">Address</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="address1" />
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="country" class="col-sm-4 col-form-label">Country</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="state" class="col-sm-4 col-form-label">State</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="city" class="col-sm-4 col-form-label">City</label>
                            <div class="col-sm-8">
                                <select class="form-select form-select-sm" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4 row">
                            <label for="postcode" class="col-sm-4 col-form-label">Postal Code</label>
                            <div class="col-sm-8">
                                <input type="text" class="form-control form-control-sm" id="postcode" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 text-center">
                        <button type="button" class="btn btn-primary btn-sm me-3">Submit</button>
                        <button type="button" class="btn btn-secondary btn-sm">Reset</button>
                    </div>
                </div>
            </div>
        </Layout>   
    );
}

export default User;