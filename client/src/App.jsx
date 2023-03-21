import React, { useEffect, useState } from 'react'
import AnimatedRoutes from './components/AnimatedRoutes'
import ReactApp from './components/WhatsApp'
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from 'styled-components';


const AppLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`
const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);
  return (
    <>
      {
        loading ?
          <AppLoader>
            <ScaleLoader
              color="royalblue"
              size={100}
            />
          </AppLoader>

          :
          <div>
            <AnimatedRoutes />
            <ReactApp />
          </div>


      }

    </>
  )

}

export default App
