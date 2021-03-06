import React from 'react'
import Wrapper from './wrapper'
import TextBox from './text-box'
import SideBackground from './side-bg'

export default ({
  img,
  responsive,
  topic,
  page,
  sign,
  rightImage,
  children,
  left,
  right,
}) => {
  let dir = ''
  if (rightImage) {
    dir = 'text-image-wrapper--image-right'
  }
  if (left) {
    left = Array.isArray(left) ? left : ['left']
  }
  if (right) {
    right = Array.isArray(right) ? right : ['right']
  }
  return (
    <div style={{ position: 'relative' }}>
      {left && <SideBackground settings={['left', page, ...left]} />}
      {right && <SideBackground settings={['right', page, ...right]} />}
      <Wrapper>
        <div className={`text-image-wrapper ${dir}`}>
          <div className="text-image-wrapper__image">
            <img
              src={img}
              srcSet={
                responsive
                  ? `${img.replace(/\.(png|jpe?g|svg)$/i, '@2x.$1')} 2x`
                  : null
              }
            />
          </div>
          <div className="text-image-wrapper__text">
            {children || <TextBox page={page} topic={topic} sign={sign} />}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
