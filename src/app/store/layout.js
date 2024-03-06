import Sidebar from "../ui/sidebar/SideBar.js";
import StoreProvider from "../provider";

export const metadata = {
    title: "Novella | Buy or Rent Books",
    description: "An Online Bookstore for Sell or Rent Books",
  };
  
  export default function BookStoreLayout({ children }) {
    return (
        <StoreProvider>
             <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
                <Sidebar />
                <div className="flex flex-wrap pl-10 pt-10 justify-center ">
                    {children}
                </div>  
            </div>
        </StoreProvider>  
        );
  }