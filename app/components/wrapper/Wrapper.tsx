import React from 'react'

type TProps = {
  children: React.ReactNode;
}

const Wrapper = ({ children }: TProps) => {
  return (
    <div >
      <div >
        {children}
      </div>
    </div>
  )
}

export default Wrapper
