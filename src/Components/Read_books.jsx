import { useEffect, useState } from "react";
import ReadItem from "../Utilities/ReadItem";
import { Link } from "react-router-dom";
const Read_books = () => {
    const [display, setDisplay] = useState(4)
    const [nodonated, setNodonated] = useState('')
    const items = JSON.parse(localStorage.getItem('donateditem'))
    useEffect(() => {
        if (items) {
            setNodonated(true)
        } else {
            setNodonated(false)
        }
    }, [items])
    return (
        <div>
            <div className={nodonated ? 'grid lg:grid-cols-1 container  md:my-12 lg:my-0 gap-6 mx-auto' : ''}>
                {
                    nodonated ? items.slice(0, display).map(item => <ReadItem key={item.id} item={item} ></ReadItem>) : <div>
                        <h3 className="h-[60vh] font-bold text-3xl flex  justify-center items-center ">No donated Item Found</h3>
                    </div>

                }


            </div>
            {
                items?.length ? <div className={display === items?.length || items?.length < 4 ? 'hidden' : 'flex justify-center items-center my-8'}>
                    <Link onClick={() => setDisplay(items?.length)}
                        className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out rounded-lg shadow-xl group hover:ring-1 hover:via-emerald-500">
                        <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 via-emerald-600 to-green-700"></span>
                        <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                        <span class="relative text-white">Show All</span>
                    </Link>
                </div> : ''
            }
        </div>
    );
};

export default Read_books;