import React from 'react'
import Roadmap from './Roadmap/Roadmap'

function WithoutSkills() {
    return <>
        {/* bg */}
        <div>
      {/* Header with background image */}
      <div
        style={{
          backgroundImage: "url('/imgs/coursesBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60dvh'
        }}></div>

      {/* Categories (HTML, CSS, etc.) */}
      <Roadmap/>
    </div>
    </>
}

export default WithoutSkills
