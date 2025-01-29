// toastify
import { toast } from 'react-toastify';
const getStoredReadList = () => {
    //read-list
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}


const addToStoredReadList = (id) => {
    const storedList = getStoredReadList()
    if(storedList.includes(id)){
        //already exist. do not add it
        console.log(id, 'already exist in the read list');
        toast.error('Already exist in the read list', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
        //ideally trigger toast from the component
        // Toastify
        toast('This book is added to your read list.', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

    }
}


const getStoredWishList = () => {
    //wishlist
    const storedWishListStr = localStorage.getItem('wish-list')
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList()
    if(storedWishList.includes(id)){
        //already exist. do not add it
        console.log(id, 'already exist in the wish list');
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}


export {addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList};