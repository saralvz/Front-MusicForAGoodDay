import React from "react";
import { useForm } from "react-hook-form";
import "../form/form.css";

const ValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const apiUrl = "http://localhost:80/MusicForAGoodDay/songs/create";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    alert("Validation passed");
  };


  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
          <div className='form-control' id='songs'>
            <label className='input-group'>Songs Name</label>
            <input className='input-group_label' type="text" {...register('songName', {required:true})} placeholder="Enter the Songs Name"/>
            {errors.songName && <small className='fail'>This filed can not be empty</small>}
          </div>
          <div className='form-control' id='artist'>
            <label className='input-group'>Artist</label>
            <input className='input-group_label' type="text" {...register('artist', {required:true})} placeholder="Enter the Artists Name" />
            {errors.artist && <small className='fail'>This filed can not be empty</small>}
          </div>
          <div className='form-control' id='gender'>
            <label className='input-group'>Songs Gender</label>
            <input className='input-group_label' type="text" {...register('gender', {required:true})} placeholder="Enter the gender of the Song"/>
            {errors.gender && <small className='fail'>This filed can not be empty</small>}
          </div>
          <div className='form-control' id='name'>
            <label className='input-group'>Your Name</label>
            <input className='input-group_label' type="text" {...register('yourName', {required:true})} placeholder="Enter your Name"/>
            {errors.yourName && <small className='fail'>This filed can not be empty</small>}
          </div>
          <div className='form-control' id='img'>
            <label className='input-group'>Image URL</label>
            <input className='input-group_label' type="text" {...register('img', {required:true})} placeholder="Enter the URL of the image"/>
            {errors.img && <small className='fail'>This filed can not be empty</small>}
          </div>
          <div className='form-control' id='youtube'>
            <label className='input-group'>YouTube URL</label>
            <input className='input-group_label' type="text" {...register('youTube', {required:true})} placeholder="Enter the URL of YouTube"/>
            {errors.youTube && <small className='fail'>This filed can not be empty</small>}
          </div>
          <button type='submit'>Done!</button>
        </form>
      </div>
    </>
  )
}

export default ValidationForm