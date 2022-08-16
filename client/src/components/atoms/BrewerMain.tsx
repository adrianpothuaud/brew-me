import React from 'react'
// import { createUseStyles } from 'react-jss'

type BrewerMainProps = {
  children: React.ReactNode
}

// const useStyles = createUseStyles({

// })

export default function BrewerMain(props: BrewerMainProps) {
  return (
    <main>{props.children}</main>
  )
}
