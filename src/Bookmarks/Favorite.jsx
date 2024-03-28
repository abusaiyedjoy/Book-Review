import { useEffect, useState } from "react";
import FavoriteItem from '../Bookmarks/FavoriteItem'
const Favorite = () => {
    const [nodonated, setNodonated] = useState('')
    const items = JSON.parse(localStorage.getItem('favorite'))
    useEffect(() => {
        if (items) {
            setNodonated(true)
        } else {
            setNodonated(false)
        }
    }, [items])
    return (
        <div>
            <div className={nodonated ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container  md:my-12 lg:mb-12 gap-6 mx-auto' : ''}>
                {
                    nodonated ? items.map(item => <FavoriteItem key={item.id} item={item} ></FavoriteItem>) : <div>
                        <h3 className="h-[60vh] font-bold text-3xl flex  justify-center items-center ">No donated Item Found</h3>
                    </div>

                }


            </div>
        </div>
    );
};

export default Favorite;