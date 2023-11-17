// Importing the redirect function from 'next/navigation'
// This function is used to programmatically navigate to different pages in a Next.js application

import {redirect} from 'next/navigation';





/**
 * Homepage Component
 * 
 * This component is responsible for redirecting users to the dashboard page.
 * As soon as this component is rendered, it uses the 'redirect' function from 'next/navigation' to navigate to '/dashboard'.
 * 
 * @returns Nothing. The purpose of this component is to perform a redirect operation.
 */
const Homepage = () => {

  redirect('/dashboard');

}

export default Homepage