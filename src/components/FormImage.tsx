import React, { useEffect, useRef, useState } from 'react';

const FormImage = () => {
    const firstRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File>()
    const [preview, setPreview] = useState<string | null>();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
            setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null)
        }
    }, [image])
    
    return (
        <form>
            { preview ? (
                <img className="photo__item" 
                        src={preview} 
                        alt={"preview"} 
                        style={{ objectFit: "cover"}}
                        onClick={(event) => {
                        event.preventDefault()
                        firstRef.current?.click()
                    }}        
                />
            ) : (
                <button 
                    className="photo__item"
                    onClick={(event) => {
                        event.preventDefault()
                        firstRef.current?.click()
                    }}    
                />
            )}
            <input 
                type="file" 
                style={{ display: "none" }} 
                ref={firstRef}    
                accept="image/*"
                onChange={(event) => {
                    if (event.target.files) {
                        const file = event.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                        setImage(file);
                        }
                    }
                }}
            />
        </form>
    );
};

export default FormImage;