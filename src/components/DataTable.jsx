import React from 'react'
import SNboxSvg from './SNboxSvg'

const DataTable = ({ products, isLoading, error }) => {
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (!products || products.length === 0) return <div>No products found.</div>

  return (
    <div className="px-4 sm:px-8 mx-auto py-8">
      <h2 className="font-inter font-medium text-[16px] sm:text-[18px] leading-[21px] text-dark pl-8 pb-8">
        Department List
      </h2>

      <div className="overflow-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-lightBlue text-Grey text-[12px] leading-4">
            <tr>
              <th className="w-8 sm:w-10 p-2 sm:p-3">
                <SNboxSvg width="14px" height="14px" />
              </th>
              <th className="w-12 sm:w-16 p-2 sm:p-3 whitespace-nowrap">S/N</th>
              <th className="w-16 sm:w-20 p-2 sm:p-3 whitespace-nowrap">Image</th>
              <th className="w-24 sm:w-32 p-2 sm:p-3 whitespace-nowrap">SKU</th>
              <th className="w-40 sm:w-56 p-2 sm:p-3 whitespace-nowrap">Name</th>
              <th className="w-64 sm:w-80 p-2 sm:p-3 whitespace-nowrap">Title</th>
              <th className="w-64 sm:w-80 p-2 sm:p-3 whitespace-nowrap">Description</th>
              <th className="w-3 sm:w-40 p-2 sm:p-3 whitespace-nowrap">Brand</th>
              <th className="w-3  sm:w-40 p-2 sm:p-3 whitespace-nowrap">Cost Price</th>
              <th className="w-24 sm:w-3  p-2 sm:p-3 whitespace-nowrap">Quantity</th>
              <th className="w-24 sm:w-3  p-2 sm:p-3 whitespace-nowrap">Size</th>
            </tr>
          </thead>

          <tbody className="bg-white text-brown font-medium text-[12px]  leading-5">
            {products.map((product, index) => (
              <tr
                key={index}
              >
                <td className="p-2 sm:p-3 border-b border-light text-[14px]">
                  <SNboxSvg width="14.06px" height="14px" />
                </td>
                <td className="p-2 sm:p-3 text-[14px]">{index + 1}.</td>
                <td className="p-2 sm:p-3 text-[14px]">
                  <img
                    src={product.Image_1}
                    alt={product.Name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded"
                  />
                </td>
                <td className="p-2 sm:p-3">{product.SKU}</td>
                <td className="p-2 sm:p-3">
                  {product.name || product.supplier}
                </td>
                <td className="p-2 sm:p-3">{product.Title}</td>
                <td className="p-2 sm:p-3">{product.Description}</td>
                <td className="p-2 sm:p-3">{product.Brand || product.Title}</td>
                <td className="p-2 sm:p-3">{product['Cost Price']}</td>
                <td className="p-2 sm:p-3">{product.Quantity}</td>
                <td className="p-2 sm:p-3">{product.size || product.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataTable
