import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import rmAuthData from '../../auth-utils/rmAuthData'

export default function LogoutScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    rmAuthData()
    navigate('/')
  })

  return (
    <></>
  )
}
