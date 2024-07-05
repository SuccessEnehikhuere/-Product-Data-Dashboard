import React from 'react'
import { createContext } from 'react'
import {  QueryClient, QueryClientProvider } from 'react-query'
import axios from 'axios'


//  DataContext
const DataContext = createContext();


// fetchData function
export const fetchData = async ({ queryKey }) => {
  const [, supplierName] = queryKey;
  const { data } = await axios.get(`http://3.88.1.181:8000/products/public/catalog?supplier=${supplierName}`);
  console.log(data);
  return data;
};


// DataProvider component
export const DataProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DataContext.Provider value={{ fetchData }}>
        {children}
      </DataContext.Provider>
    </QueryClientProvider>
  );
};

