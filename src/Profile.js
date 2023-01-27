import {React,  useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/footer'
import Table from './component/Table'
import TableA from './component/TableA'
function Profile() {
  const navigate= useNavigate()


  //re//
  useEffect(()=>{
    if (!localStorage.getItem('token')){
      navigate('/')
    }
  },[])
  return (
    <div className='headercon'>
      <Navbar/>
      <Table/>
      <TableA/>
      <Footer/>
      </div>
    
     
    
  )
}

export default Profile