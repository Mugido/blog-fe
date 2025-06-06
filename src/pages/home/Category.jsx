import React from 'react'
import CategoryList from './CategoryList'

const Category = () => {
  return (
    <div className="w-full lg:w-1/3 px-3">
          {/* topics */}
         <CategoryList />

          {/* divider */}
          <div className="border border-dotted"></div>

          {/* subscribe */}
          <div className="p-1 mt-4 mb-4">
            <h5 className="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
            <p className="text-gray-600">
              Subscribe to our newsletter. We deliver the best health-related articles to your inbox
            </p>
            <input placeholder="your email address"
              className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
            <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
              Subscribe
            </button>
          </div>

          {/* divider */}
          <div className="border border-dotted"></div>

        </div>
  )
}

export default Category