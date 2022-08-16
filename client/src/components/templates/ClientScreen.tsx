import React from 'react'
// import { createUseStyles } from 'react-jss'

// const useStyles = createUseStyles({

// })

type ClientScreenProps = {
  children: React.ReactNode
}

export default function ClientScreen(props: ClientScreenProps) {
  return (
    <>
      {props.children}
    </>
  )
}
