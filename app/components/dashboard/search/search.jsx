"use client";

// Importing necessary packages, components, and styles for the Search component
import { MdSearch } from "react-icons/md"; // MdSearch icon from react-icons
import styles from "./search.module.css"; // CSS module for styling the Search component
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // usePathname, useRouter, and useSearchParams hooks from Next.js for navigation
import { useDebouncedCallback } from "use-debounce"; // useDebouncedCallback hook from use-debounce for debouncing the search input






/**
 * Search Component
 * 
 * This component is responsible for rendering a search input.
 * 
 * It takes a placeholder string as a prop, which is displayed in the search input when it's empty.
 * It uses the useSearchParams hook to get the current search parameters, the useRouter hook to replace the current URL, and the usePathname hook to get the current pathname.
 * It uses the useDebouncedCallback hook to debounce the search input. When the search input changes, it updates the 'q' search parameter and replaces the current URL.
 * 
 * The layout of this component is controlled by CSS modules, with styles imported from 'search.module.css'.
 * 
 * @param {string} placeholder The placeholder string passed to the Search component.
 * @returns A JSX element representing a search input.
 */




const Search = ({ placeholder }) => {



/**
 * This section of code is responsible for handling the search functionality in the Search component.
 * 
 * It uses several hooks from Next.js:
 * - useSearchParams to get the current search parameters.
 * - useRouter to get the router object, which is used to replace the current URL.
 * - usePathname to get the current pathname.
 * 
 * It also uses the useDebouncedCallback hook from use-debounce to debounce the search input. This hook takes a callback and a delay as parameters. The callback is executed after the delay whenever the search input changes.
 * 
 * Inside the callback:
 * - A new URLSearchParams object is created with the current search parameters.
 * - The 'page' search parameter is set to 1.
 * - If the search input is not empty and its length is greater than 2, the 'q' search parameter is set to the value of the search input. If the search input is empty, the 'q' search parameter is deleted.
 * - The current URL is replaced with a new URL that includes the updated search parameters.
 * 
 * The delay for the debounce is set to 300 milliseconds.
*/

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {

    const params = new URLSearchParams(searchParams);

    params.set("page", 1);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } 
    else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);

  }, 300);






  
  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
