import React, { useState } from 'react';

const ImagePreview = () => {
    const [{alt, src}, setImg] = useState({
        src: '',
        alt: 'Upload an Image'
    });
    const idEl = Math.random();

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }

    return(
        <div className="form__img-input-container">
            {
                src === '' ? '' :  
                <img src={src} alt={alt} className="form-img__img-preview" style={{width:'80%', maxHeight: '250px', objectFit: 'contain'}}/>
            }
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg" 
                id={'photo-' + idEl} 
                className="visually-hidden"
                onChange={handleImg}
            />
            <label htmlFor={'photo-' + idEl}  style={{padding:'.5rem',background:'#b19d7f',color:'#fff',fontSize:'.75rem',cursor:'pointer'}}>
                WYBIERZ ZDJECIE
            </label>
           
        </div>
    );
}

export default ImagePreview;