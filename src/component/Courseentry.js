import React, { useState } from 'react'

const Courseentry = () => {
    var [courseTitle,setTitle]=useState("")
    var [courseDuration,setDuration]=useState("")
    var [courseDescription,setDescription]=useState("")
    var [courseVenue,setVenue]=useState("")
    var [courseDate,setDate]=useState("")
    const subData=()=>{
        const data={"courseTitle":courseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
        console.log(data)
    }

  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Course Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Duration</label>
                    <input onChange={(e)=>{setDuration(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">Description</label>
                    <textarea onChange={(e)=>{setDescription(e.target.value)}} name="" id="" cols="30" rows="4" class="form-control"></textarea>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="" id="" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} class="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Courseentry