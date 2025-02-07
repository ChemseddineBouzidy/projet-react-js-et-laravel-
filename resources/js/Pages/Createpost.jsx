import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Createpost() {
    const [imgPreview, setImgPreview] = useState("");
    const { post, data, setData, errors, processing } = useForm({
        image: "",
        description: "",
    });

    const handleImage = (e) => {
        // setData('image', e.target.files[0])
        const file = e.target.files[0];
        setData("image", file);
        setImgPreview(URL.createObjectURL(file));
        //  setImgPreview(URL.createObjectURL(setData('image', e.target.files[0])));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("post.store"));
      
    };

    return (
        <div className="w">
            <h1 className="fs-6">Ajouter une nouvelle publication</h1>
            <img src={imgPreview} alt="" className="img-preview" />
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group mb-3">
                    <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImage}
                    />
                    {errors.image && (
                        <div className="text-danger">{errors.image}</div>
                    )}
                </div>

                <div className="form-group mb-3">
                    <div className="row">
                        <div className="col-md-9">
                            <textarea
                                className="form-control description-area"
                                value={data.description}
                                onChange={(e) =>
                                    setData("description", e.target.value)
                                }
                                rows={1}
                                placeholder="Décrivez votre publication"
                            ></textarea>
                        </div>
                        <div className="col-md-3">
                            <button className="btn btn-dark w-100">
                                Publier
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
