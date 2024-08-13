import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../ProductCard/ProductCard";
import styles from "@/styles/Pagination.module.css";

const data = Array(200).fill({
  discount: 50,
  originalPrice: 99,
  discountedPrice: 50,
  rating: "★★★★☆",
  description: "Multitec 150b Wire Stripper and Cutter",
  imgSrc: "/Images/wire.jpg",
});

const SidebarPagination = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-center lg:justify-center gap-10">
        {currentPageData.map((cardData, index) => (
          <div className="" key={index}>
            <ProductCard cardData={cardData} />
          </div>
        ))}
      </div>

      <div className={`flex justify-center items-center my-3 ${styles.item}`}>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={`${styles.active} ${styles["pagination-active"]}`}
          previousClassName={styles.previous}
          nextClassName={styles.next}
          disabledClassName={styles.disabled}
          breakClassName={styles.break}
          pageClassName={styles.page}
        />
      </div>
    </div>
  );
};

export default SidebarPagination;
