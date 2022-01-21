import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './main.css';
import Carusel from '../carusel/Carusel';
import CopyMain from '../filter/Filter';
import Products from '../products/Products';
import { Productss } from '../Data';
import { Data } from '../Data';
import { Mulk } from '../Data';
import Header from '../header/Header';
import Footer from '../footer/Footer';

function Sidebar() {
  const { pathname } = useLocation();
  const Product = Productss.filter((item) => item.link === pathname);
  const [menu, setMenu] = useState(Product.slice(0, 100));
  const { name } = useParams();
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(menu.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <div className="sidebar">
      {Data.map((i) => {
        return (
          <div>
            {i.submenu
              .filter((e) => e.link1 === name)
              .map((d) => {
                return (
                  <div>
                    <Header></Header>
                    <div className="container sidebar__container">
                      <ul className="sidebar__list">
                        {Data.map((item, index) => {
                          return (
                            <div>
                              <li
                                onClick={() => toggle(index)}
                                className={
                                  clicked === index
                                    ? 'sidebar__item active'
                                    : 'sidebar__item'
                                }
                              >
                                <div className="sidebar__item-group">
                                  <div className="sidebar__icon">
                                    <Icon icon={`${item.icon}`} />
                                  </div>
                                  <span
                                    className={
                                      clicked === index
                                        ? `sidebar__link`
                                        : 'sidebar__link'
                                    }
                                  >
                                    {item.title}
                                  </span>
                                </div>
                                <div className="sidebar__toggle-icon">
                                  <Icon
                                    icon={
                                      clicked === index
                                        ? 'akar-icons:chevron-up'
                                        : 'akar-icons:chevron-down'
                                    }
                                  />
                                </div>
                                {clicked === index ? (
                                  <ul className={'sub-menu'}>
                                    {item.submenu.map((item) => {
                                      return (
                                        <div>
                                          <li>
                                            <Link to={`/${item.link1}`}>
                                              {item.title}
                                            </Link>
                                            <span>{item.view}</span>
                                          </li>
                                        </div>
                                      );
                                    })}
                                  </ul>
                                ) : null}
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                      <div>
                        <CopyMain menu={menu} setMenu={setMenu}></CopyMain>
                        <Products
                          menu={menu}
                          setMenu={setMenu}
                          pagesVisited={pagesVisited}
                          pageCount={pageCount}
                          pageNumber={pageNumber}
                          usersPerPage={usersPerPage}
                          changePage={changePage}
                        ></Products>
                      </div>
                    </div>
                    <Footer></Footer>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
