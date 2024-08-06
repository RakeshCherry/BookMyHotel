import React, { useEffect, useState } from "react"
import { getRoomById, updateRoom } from "../utils/ApiFunctions"
import { Link, useParams } from "react-router-dom"

const EditRoom = () => {

  const[room, setRoom] = useState({
    photo : null,
    roomType : "",
    roomPrice : ""
})

const[imagePreview, setImagePreview] = useState("")
const[successMessage, setSuccessMessage] = useState("")
const[errorMessage, setErrorMessage] = useState("")

const {roomId} = useParams()





const handleImageChange = (e) => {
  const selectedImage = e.target.files[0] 
  setRoom({...room, photo: selectedImage})
  setImagePreview(URL.createObjectURL(selectedImage))
}

const handleInputChange = (event) => {
  const { name, value} = event.target
  setRoom({...room, [name]: value})
}

useEffect(() => {
  const fetchRoom = async () => {
    try{
      const roomData = await getRoomById(roomId)
      setRoom(roomData)
      setImagePreview(roomData.photo)
    }catch(error){
      console.error(error)
    }
  }
  fetchRoom()
}, [roomId])

const handleSubmit = async(event) => {
  event.preventDefault()

  try{
    const response = await updateRoom(roomId, room)
    if(response.status === 200){
      setSuccessMessage("Room updated sucessfully!")
      const updateRoomData = await getRoomById(roomId)
      setRoom(updateRoomData)
      setImagePreview(updateRoomData.photo)
      setErrorMessage("")
    }else{
      setErrorMessage("Error updating room")
    }
  }catch(error){
    console.error(error)
    setErrorMessage(error.message)
  }
}



  return (
    <>
    <section className='container, mt-5 mb-5'>
        <div className='row justify-cotent-center'>
            <div className='col-md-8 col-lg-6'>
                <h2 className='mt-5 mb-2'>Add a New Room</h2>
                {successMessage && (
					<div className="alert alert-success fade show"> {successMessage}</div>
				)}

				{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}


                <form onSubmit={handleSubmit}>
                    <div className='mb-3 '>
                        <label htmlFor='roomType' className='form-label'>
                            Room Type
                        </label>
                        <div>
                            <RoomTypeSelector
                            handleRoomInputChange={handleInputChange}
                            newRoom={newRoom}
                            />
                        </div>
                    </div>
                    <div className='mb-3 '>
                        <label htmlFor='roomPrice' className='form-label'>
                            Room Price
                        </label>
                       <input
                       className='form-control'
                       required
                       type="number"
                       id='roomPrice'
                       name='roomPrice'
                       value={newRoom.roomPrice}
                       onChange={handleInputChange}
                        />
                    </div>
                    <div className='mb-3 '>
                        <label htmlFor='photo' className='form-label'>
                            Room Photo
                        </label>
                        <input 
                        required
                        id='photo'
                        name='photo'
                        type="file"
                        className='form-control'
                         onChange={handleImageChange}
                        />
                        {imagePreview && (
                            <img src={imagePreview} 
                                alt="roomImage" 
                                style={{maxWidth: "400px", maxHeight: "400px"}} 
                                className='md-3'/>
                        )}
                    </div>
                    <div className='d-grid gap-2 d-md-flex mt-2'>
                        <Link to={"/existing-rooms"} className="btn btn-outline-info">
                            Back
                        </Link>
                        <button type="submit" className='btn btn-outline-primary ml-5'>
                            Edit Room
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default EditRoom