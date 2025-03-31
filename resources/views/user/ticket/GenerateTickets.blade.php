<div class="container-fluid main-content settings px-2 px-lg-4">
    <!-- Tables -->
    <div class="row my-2 g-3 g-lg-4 pb-3 settings-inner">

   

        <div class="col-sm-6 col-lg-6 col-xl-6 col-xxl-7">
            <div class="settings-tab">
                <h5 class="mb-0">Generate Ticket </h5>

                

                <div class="tab-content pt-2" id="pills-tabContent">
                   

                    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" tabindex="0">
                        <form action="{{ route('user.SubmitTicket') }}" method="POST">
                            {{ csrf_field() }}
                            <div class="row">
                                <div class="col-md-12">
                                    <label class="fw-semibold mb-2 mt-3" for="fname">Category</label>
                                    <select class="form-control" name="category" required="true">
                                        <option value="">Select Category</option>
                                        <option value="Verification">Verification </option>
                                        <option value="Technical">Technical</option>
                                        <option value="Team Building">Team Building </option>
                                        <option value="Financial">Financial</option>
                                        <option value="Fund Issue">Fund Issue</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>

                                <div class="col-md-12">
                                    <label class="fw-semibold mb-2 mt-3" for="fname">Ticket No</label>
                                    <input type="number" class="form-control "
                                    name="ticket_no" 
                                    placeholder="Ticket No (Optional) ">
                                </div>

                                <div class="col-md-12">
                                    <label class="fw-semibold mb-2 mt-3" for="fname">Message</label>
                                    <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                </div>


                             

                                <div class="col-12">

                                    <div class="mt-4 d-flex gap-3">
                                        <button type="submit" class="primary-btn-lg submit-btn">Submit</button>
                                     
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    </div>
    