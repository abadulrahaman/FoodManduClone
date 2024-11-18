import { data } from 'autoprefixer'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// "https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=" +
// "https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=" +

const RestaurantsDetails = () => {
  const [vendorData, setVendorData] = useState([])
  const vendorUrlId = useParams()
  const { id } = vendorUrlId

  const [categorydata, setCategoryData] = useState([])
  const categoryUrlId = useParams()

  const getVendorDetail = async (id) => {
    try {
      const data = await fetch(
        'https://foodmandu.com/webapi/api/vendor/GetVendorDetail?VendorId=' + id
      )
      const jsonData = await data.json()
      setVendorData(jsonData)
    } catch (e) {
      console.log(e)
    }
  }

  const getCategoryDetail = async (id) => {
    try {
      const data = await fetch(
        'https://foodmandu.com/webapi/api/v2/Product/GetVendorProductsBySubCategoryV2?VendorId=' +
          id
      )
      const jsonData = await data.json()
      setCategoryData(jsonData)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getVendorDetail(id)
    getCategoryDetail(id)
  }, [])

  console.log(vendorData[0])

  return <div>restaurant Details</div>
}

export default RestaurantsDetails
