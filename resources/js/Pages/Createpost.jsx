import { useForm } from '@inertiajs/react'
import React, { useState } from 'react'

export default function Createpost() {
const [imgPreview, setImgPreview] = useState("")
  const { post, data, setData, errors, processing } = useForm({
    image: "",
    description: "",
  })

  const handleImage = (e) => {

  //  setData('image', e.target.files[0])

   setImgPreview(URL.createObjectURL(e.target.files[0]));
   
  }


  return (
    <div className="">
      <h1 className='fs-6'>Ajouter une nouvelle publication</h1>
      <img src={imgPreview} alt="" className='img-preview' />
      <form>
        <div className="form-group mb-3">
          <input type="file" className="form-control" value={data.image} onChange={handleImage} />
        </div>

        <div className="form-group mb-3">
          <div className="row">
            <div className="col-md-9">
              <textarea className='form-control description-area' rows={1} placeholder='Décrivez votre publication'></textarea>
            </div>
            <div className="col-md-3">
              <button className='btn btn-dark w-100'>Publier</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
