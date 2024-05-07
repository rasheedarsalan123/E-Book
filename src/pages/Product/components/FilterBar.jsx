
import { MdClear } from "react-icons/md";
export const FilterBar = ({setShow}) => {
  return (
    <div >
<aside id="default-sidebar" class="fixed  top-0 left-90 z-40 w-68 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-between text-center items-center ">
       <h5 className="font-semebold text-white pt-3">Filters</h5>
       
  <MdClear color="white" className=" w-12 mt-2 cursor-pointer " onClick={()=>setShow(false)}/>
 
   </div>
   <div className="border-1"></div>
   <div className="flex dark:text-white flex-col ">
   <span>Sort By</span>
      <ul class="space-y-2 font-medium  ">
       <li>
       <input type="radio" name="prise-sort"/> <label>Price-Low-to-High
         </label>
         </li>
         <li>
       <input type="radio" name="prise-sort"/> <label>High-Low-to-Price
         </label>
         </li>
         </ul>
          </div>
          <div className="flex dark:text-white flex-col ">
   <span>Rating</span>
      <ul class="space-y-2 font-medium  ">
       <li>
       <input type="radio" name="Rating-sort"/> <label>1 Star & Above
         </label>
         </li>
         <li>
       <input type="radio" name="Rating-sort"/> <label>2 Star & Above
         </label>
         </li>
         <li>
       <input type="radio" name="Rating-sort"/> <label>3 Star & Above
         </label>
         </li>
         <li>
       <input type="radio" name="Rating-sort"/> <label> 4 Star & Above
         </label>
         </li>
         </ul>
          </div> 
          <div className="flex dark:text-white flex-col ">
   <span>Other Rating</span>
      <ul class="space-y-2 font-medium  ">
       <li>
       <input type="checkbox" name="prise-sort"/> <label>Best Saller only
         </label>
         </li>
         <li>
       <input type="checkbox" name="prise-sort"/> <label> Instouk Only
         </label>
         </li>
         </ul>
         <button className="text-white bg-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center darh:bg-white-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline ">Clear filter</button>
          </div>
         
   </div>
</aside>



 


   </div>
  )
}
