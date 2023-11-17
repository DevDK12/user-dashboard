"use client";

// Importing necessary packages, components, and styles for the Pagination component
import styles from "./pagination.module.css"; // CSS module for styling the Pagination component
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // usePathname, useRouter, and useSearchParams hooks from Next.js for navigation
import {ITEM_PER_PAGE} from "@/app/constants"; // Constant for the number of items per page








/**
 * Pagination Component
 * 
 * This component is responsible for rendering a pagination.
 * 
 * It takes a count prop, which is the total number of items.
 * 
 * It uses the useSearchParams hook to get the current search parameters, the useRouter hook to get the router object, and the usePathname hook to get the current pathname.
 * 
 * It calculates the current page number and whether there are previous and next pages.
 * 
 * It has a handleChangePage function, which updates the 'page' search parameter and replaces the current URL when the previous or next button is clicked.
 * 
 * The layout of this component is controlled by CSS modules, with styles imported from 'pagination.module.css'.
 * 
 * @param {number} count The total number of items passed to the Pagination component.
 * @returns A JSX element representing a pagination.
 */

const Pagination = ({ count }) => {




  /**
 * This section of code is responsible for handling the pagination functionality in the Pagination component.
 * 
 * It uses several hooks from Next.js:
 * - useSearchParams to get the current search parameters.
 * - useRouter to get the router object, which is used to replace the current URL.
 * - usePathname to get the current pathname.
 * 
 * It retrieves the current page number from the search parameters or defaults to 1 if the 'page' search parameter is not set.
 * 
 * It creates a new URLSearchParams object with the current search parameters.
 * 
 * It calculates whether there are previous and next pages based on the current page number, the number of items per page (ITEM_PER_PAGE), and the total number of items (count).
 * 
 * It defines a handleChangePage function, which updates the 'page' search parameter and replaces the current URL when the previous or next button is clicked. The 'page' search parameter is incremented or decremented based on the type parameter of the function.
 */

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };





  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
