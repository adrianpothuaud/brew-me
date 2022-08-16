import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  footer: {
    width: '100%',
  },
})

export default function BrewerFooter() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <p>&copy;2022 Adrian Pothuaud</p>
    </footer>
  )
}
