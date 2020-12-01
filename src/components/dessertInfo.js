import React,{ useState } from 'react'
import { useEffect } from 'react'
import { Firestore,Firestorage, Firebase } from "../Firebase"




export default  function DessertInfo(){
    const [fileUrl , setFileUrl] = useState();

    
    const onFileChange = async (e) => {
        const file = e.target.files[0]
        const storageRef = Firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        Firestore.collection("Dessert").doc(name)
    }

   
    const [menu , setMenu] = useState([]); 

    useEffect(()=>{
        const fetchData = async () => {
            const arr = []
            const docs = await Firestore.collection("Dessert").get()
            docs.forEach(doc => {
                arr.push(doc.data())
            })
            return arr
        }
        fetchData()
            .then(datas => setMenu(datas))
    }, [])

   return(
        <div>
           
           <form onSubmit={onSubmit}>
            <input type="file" onChange={onFileChange} />
            <button>Submit</button>
           </form>
            {/* {
                menu.map(m => (
                    <h1>{m.dName}</h1>
                ))
            } */}
            </div>

   );
}