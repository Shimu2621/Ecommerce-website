import React, { useState } from "react";

let searchProducts = "";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="search_wrapper">
      <input
      // onKeyDown={(e) => handleKey(e)}
      // value={query}
      // onChange={(e) => setQuery(e.target.value)}
      // placeholder="search for..."
      ></input>
      <i
        // onClick={() => handlePush()}
        className="fas fa-search"
      ></i>
      <div
        className={`search_overlay ${searchProducts.length == 0 && "d-none"}`}
      >
        <div className="search_products">
          {/* {searchProducts.lenghth > 0 &&
            searchProducts.map((product, index) => {
              return (
                <Link key={index} href={`/product/${product.slug}`}>
                  <a href="">
                    <div className="items">
                      <img src={product.thumbnail} alt="" />
                      <h5>{product.name}</h5>
                      <div className="product-price">
                        {product?.discount?.value > 0 ? (
                          <>
                            <span className="old-price">${product.price}</span>
                            {product.discount.discountType === "flat" ? (
                              <span className="new-price">
                                ${product.price - product.discount}
                              </span>
                            ) : (
                              <span className="new-price">
                                $
                                {product.price -
                                  Math.floor(
                                    product.price *
                                      (product.discount.value / 100)
                                  )}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="new-price">${product.price}</span>
                        )}
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })} */}
        </div>
      </div>
    </div>
  );
};

export default Search;
