import React from 'react'

import BrewerMain from '../atoms/BrewerMain'
import BrewerFooter from '../organisms/BrewerFooter'
import BrewerHeader from '../organisms/BrewerHeader'
// import { createUseStyles } from 'react-jss'

// const useStyles = createUseStyles({

// })

type BrewerScreenProps = {
  children: React.ReactNode
}

export default function BrewerScreen(props: BrewerScreenProps) {
  return (
    <>
      <BrewerHeader />
      <BrewerMain>
        {props.children}
      </BrewerMain>
      <BrewerFooter />
    </>
  )
}
