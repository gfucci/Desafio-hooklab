import { db } from "../firebase/config"
import { doc } from "firebase/firestore"
import { getDoc } from "firebase/firestore"

//hooks
import { useEffect, useState } from "react"

export const useFetchDocument = (docCollection, id) => {

    const [document, setDocument] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadDocument = async () => {
            setLoading(true)
            
            try {
                const docRef = await getDoc(doc(db, docCollection, id)) 

                setDocument(docRef.data())
            } catch (error) {
                setError(error.message)
            }

            setLoading(false)
        }

        loadDocument()
    }, [docCollection, id])

    return { document, loading, error}
}