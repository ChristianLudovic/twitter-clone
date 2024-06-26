import { Button } from "../basis/button";
import newYorkTime from "../../../public/newYork.svg"

export function FollowList(){
    return(
        <>
            <div 
                className="flex flex-col max-w-[350px] rounded-2xl"
                style={{
                    background: "#202327"
                }}
            >
                <div className="flex items-center justify-between px-4 py-3">
                    <h2
                        style={{
                            color: "#D9D9D9"
                        }}
                    >Who to follow</h2>
                </div>
                <div className="flex flex-col">
                    <div className="px-4 py-3 flex justify-between items-center">
                        <div className="flex gap-3 items-center ">
                            <img 
                                src={newYorkTime} 
                                alt="new york time logo"
                                style={{
                                    width: "48px",
                                    height: "48px"
                                }}
                            />
                            <div>
                                <div className="flex items-center gap-1">
                                    <h3 className="text-sm"
                                    style={{
                                        color: "#D9D9D9"
                                    }}
                                    >The New York Times</h3>
                                    <div className="flex items-center justify-center">
                                        <svg class="group" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9766 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 8.99998 0.25C7.74165 0.25 6.65331 1.01417 6.13581 2.125C5.78998 1.9875 5.41415 1.91667 5.02248 1.91667C3.26415 1.91667 1.84081 3.40833 1.84081 5.25C1.84081 5.66167 1.90998 6.05333 2.03831 6.41667C0.978312 6.95833 0.249146 8.09833 0.249146 9.41667C0.249146 10.6625 0.900812 11.7483 1.86748 12.3217C1.85081 12.4633 1.84081 12.605 1.84081 12.75C1.84081 14.5917 3.26415 16.0833 5.02248 16.0833C5.41415 16.0833 5.78915 16.0117 6.13498 15.875C6.65165 16.9867 7.73998 17.75 8.99915 17.75C10.2591 17.75 11.3475 16.9867 11.8633 15.875C12.2091 16.0108 12.5841 16.0817 12.9766 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2366 6.63833L8.62498 12.055C8.50415 12.2358 8.30665 12.3333 8.10415 12.3333C7.98498 12.3333 7.86415 12.3 7.75748 12.2283L7.66165 12.15L5.64915 10.1375C5.40498 9.89333 5.40498 9.4975 5.64915 9.25417C5.89331 9.01083 6.28915 9.00917 6.53248 9.25417L8.00748 10.7267L11.195 5.94333C11.3866 5.65583 11.775 5.58 12.0616 5.77083C12.35 5.9625 12.4283 6.35083 12.2366 6.6375V6.63833Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm"
                                    style={{
                                        color: "#6E767D"
                                    }}
                                >@nytimes</p>
                            </div>
                            
                        </div>
                        <Button 
                            className="px-4 py-1 bg-white rounded-full text-sm"
                            style={{
                                color: "#0F1419"
                            }}
                        >Follow</Button>
                    </div>
                    <div className="px-4 py-3 flex justify-between items-center">
                        <div className="flex gap-3 items-center ">
                            <img 
                                src={newYorkTime} 
                                alt="new york time logo"
                                style={{
                                    width: "48px",
                                    height: "48px"
                                }}
                            />
                            <div>
                                <div className="flex items-center gap-1">
                                    <h3 className="text-sm"
                                    style={{
                                        color: "#D9D9D9"
                                    }}
                                    >The New York Times</h3>
                                    <div className="flex items-center justify-center">
                                        <svg class="group" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9766 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 8.99998 0.25C7.74165 0.25 6.65331 1.01417 6.13581 2.125C5.78998 1.9875 5.41415 1.91667 5.02248 1.91667C3.26415 1.91667 1.84081 3.40833 1.84081 5.25C1.84081 5.66167 1.90998 6.05333 2.03831 6.41667C0.978312 6.95833 0.249146 8.09833 0.249146 9.41667C0.249146 10.6625 0.900812 11.7483 1.86748 12.3217C1.85081 12.4633 1.84081 12.605 1.84081 12.75C1.84081 14.5917 3.26415 16.0833 5.02248 16.0833C5.41415 16.0833 5.78915 16.0117 6.13498 15.875C6.65165 16.9867 7.73998 17.75 8.99915 17.75C10.2591 17.75 11.3475 16.9867 11.8633 15.875C12.2091 16.0108 12.5841 16.0817 12.9766 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2366 6.63833L8.62498 12.055C8.50415 12.2358 8.30665 12.3333 8.10415 12.3333C7.98498 12.3333 7.86415 12.3 7.75748 12.2283L7.66165 12.15L5.64915 10.1375C5.40498 9.89333 5.40498 9.4975 5.64915 9.25417C5.89331 9.01083 6.28915 9.00917 6.53248 9.25417L8.00748 10.7267L11.195 5.94333C11.3866 5.65583 11.775 5.58 12.0616 5.77083C12.35 5.9625 12.4283 6.35083 12.2366 6.6375V6.63833Z" fill="#D9D9D9" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-sm"
                                    style={{
                                        color: "#6E767D"
                                    }}
                                >@nytimes</p>
                            </div>
                            
                        </div>
                        <Button 
                            className="px-4 py-1 bg-white rounded-full text-sm"
                            style={{
                                color: "#0F1419"
                            }}
                        >Follow</Button>
                    </div>
                    
                </div>
                <div className="">
                    <button className="px-4 py-3 font-semibold" style={{color: "#1D9BF0"}}>Show more</button>
                </div>
            </div>
        </>
    )
}