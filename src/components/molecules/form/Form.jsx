import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit } = useForm()
  const customSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h2>UPLOAD YOUR OWN SONGS</h2>

      <form onSubmit={handleSubmit(customSubmit)}>
        <div className='form'>
          <label>Songs Name</label>
          <input type="text" {...register('songName')} />
        </div>
        <div className='form'>
          <label>Artist</label>
          <input type="text" {...register('artist')} />
        </div>
        <div className='form'>
          <label>Songs Gender</label>
          <input type="text" {...register('gender')} />
        </div>
        <div className='form'>
          <label>Your Name</label>
          <input type="text" {...register('yourName')} />
        </div>
        <div className='form'>
          <label>Image URL</label>
          <input type="text" {...register('img')} />
        </div>
        <div className='form'>
          <label>YouTube URL</label>
          <input type="text" {...register('youTube')} />
        </div>
        <button type='submit'>Done!</button>
      </form>



    </>
  )
}

export default Form