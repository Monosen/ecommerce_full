import axios from 'axios'

export const productEdit = (productData, id) => {
  return async () => {
    try {
      await axios.patch(
                `/api/v1/products/${id}`,
                { product: productData },
                {
                  headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`
                  }
                }
      )
    } catch (error) {
      console.log(error)
    }
  }
}

export const productDelete = (id) => {
  return async () => {
    try {
      await axios.delete(`/api/v1/products/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const createNewProduct = (productData) => {
  return async () => {
    try {
      const response = await axios.post('/api/v1/products', productData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}
