import React from 'react'
// import { createUseStyles } from 'react-jss'

// const useStyles = createUseStyles({

// })

type BrewerScreenProps = {
  children: React.ReactNode
}

export default function BrewerScreen(props: BrewerScreenProps) {
  return (
    <>
      {props.children}
    </>
  )
}
