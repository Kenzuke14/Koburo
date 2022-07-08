import CollectionStatus from './components/CollectionStatus'
// import Crowd from './components/Crowd'
import Minting from './components/Minting'
import logoku from "./assets/logo.gif"
import gerak from "./assets/gerak.gif"
import sttt from "./assets/sttt.png"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import angelsBg from './assets/bg.png'
function App() {
    return (
        
        <div className="relative">

            <ToastContainer />
            
            <div className='min-h-screen font-vt323 flex justify-center align-items-center z-1 ' style={{position:'absolute', top:0, left:0, width:'100%'}}>          
            <div className="flex justify-center items-center">
                    <div className="max-w-3xl text-center container__connect" style={{ background:'rgba(255, 255, 255, 0.65)', backdropFilter:'blur(5px)', borderRadius:16}}>
                        <CollectionStatus />

                        <div className="mt-8">
                            <Minting />
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen font-vt323 z-2" id='particle' style={{backgroundImage:`url(${angelsBg})`, backgroundPosition: 'right', backgroundSize:'cover'}}>
                <div className="items-center"><center><img className="max-w-3xl" src={logoku} alt="" draggable={false} /></center></div>
            </div>

        </div>
    )
}


export default App
