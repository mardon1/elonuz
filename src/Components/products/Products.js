import React, { useState, useContext, useEffect } from 'react';
import './products.css';
import { Icon } from '@iconify/react';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';

function Products({
  menu,
  pagesVisited,
  pageNumber,
  pageCount,
  usersPerPage,
  changePage,
}) {
  const { pathname } = useLocation();

  return (
    <div className="products">
      <h2 className="products__recommend">Tavsiya etilgan e’lonlar</h2>
      <div className="product__cards">
        {menu
          .slice(pagesVisited, pagesVisited + usersPerPage)
          .map((product, index) => {
            if (pathname === product.link || pathname === '/')
              return (
                <div>
                  <Link to={`/product/${product.id}`} className="product__card">
                    <Icon
                      className="product__icon-star"
                      icon="ant-design:star-filled"
                    />
                    <img src={product.img} alt="" />

                    <div className="product__date">
                      <p>
                        <span>
                          <Icon
                            className="product__icon"
                            icon="ant-design:calendar-outlined"
                          />
                        </span>
                        <span>{product.date}</span>
                      </p>
                      <p>
                        <span>
                          <Icon
                            className="product__icon"
                            icon="akar-icons:eye"
                          />
                        </span>
                        <span>{product.view}</span>
                      </p>
                    </div>
                    <div className="product__name">{product.name}</div>
                    <div className="product__price">
                      {product.price}{' '}
                      {product.currency === 'UZS' ? 'UZS' : 'USD'}
                    </div>
                  </Link>
                </div>
              );
          })}
      </div>

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      ></ReactPaginate>
    </div>
  );
}

export default Products;
