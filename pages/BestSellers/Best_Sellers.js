import React, { Component } from 'react'

const BestSellers = ({page, PAGE_CART, PAGE_PRODUCTS, renderProducts, renderCart}) => {
    return(
         <>
            <div>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
            </div>
          </>
    )
}

export default BestSellers
