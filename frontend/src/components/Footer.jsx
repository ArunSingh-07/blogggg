

const Footer = () => {
  return (
    <>
    <div className="mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
        <div className="flex flex-col text-white">
            <p>Featured Blogs</p>
            <p>Most Viewed</p>
            <p>Readers Choice</p>
        </div>

        <div className="flex flex-col text-white">
            <p>Forum</p>
            <p>Support</p>
            <p>Recent Posts</p>
        </div>

        <div className="flex flex-col text-white">
            <p>Privacy Policiy</p>
            <p>About us</p>
            <p>Terms & Conditions</p>
            <p>Terms of Service</p>
        </div>
    </div>
    <p className="py-2 pb-2 text-center text-white bg-black" >All rights reserved @Blog Space</p>
    </>
  )
}

export default Footer