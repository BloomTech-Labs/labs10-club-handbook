import React from 'react'
import renderHTML from 'react-render-html';


const SectionRender = () => {
  return (
    <div>
     {renderHTML(<p><strong>why hello there</strong></p>)}
    </div>
  )
}

export default SectionRender
