import React from 'react'

const CustonImageButton = ({image,title,handleClick}) => {
  return (
    <div style={{cursor: 'pointer',fontSize: '20px',padding:'14px',border:'none',borderRadius:'8px',fontWeight:'600',fontFamily:'"Exo 2",sans serif',fontStyle:'italic',color:'white',background:'black'}} onClick={handleClick}>
        <img src={image} alt={title} style={{width: '100%', height: '25vh', objectFit: 'contain'}}/>
        <div style={{marginTop: '6px'}}>{title}</div>
    </div>
  )
}

export default CustonImageButton