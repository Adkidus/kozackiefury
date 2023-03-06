import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ImagePreview = forwardRef((props, ref) => {
    const fileInput = React.createRef();
    const [{alt, src, file}, setImg] = useState({
        src: '',
        alt: 'Upload an Image'
    });
    const idEl = Math.random();
    useImperativeHandle(ref, () => ({
        image: file
      }));
    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name,
                file: e.target.files[0]
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
                ref={fileInput}
            />
            <label htmlFor={'photo-' + idEl}  style={{padding:'.5rem',background:'#b19d7f',color:'#fff',fontSize:'.75rem',cursor:'pointer'}}>
                WYBIERZ ZDJECIE
            </label>           
        </div>
    );
})

export default ImagePreview;