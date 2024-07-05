import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import DataTable from '../components/DataTable'
import { useQuery } from 'react-query'
import { fetchData } from '../components/context/DataContext'

 

const Home = () => {
  const [supplierName, setSupplierName] = useState('FragranceNet');
  const { data, error, isLoading } = useQuery(
    ['products', supplierName], fetchData
  )

  return (
    <div>
      <Navbar supplierName={supplierName} setSupplierName={setSupplierName} />
      <DataTable supplierName={supplierName}  products={data} isLoading={isLoading} error={error}/>
    </div>
  )
}

export default Home