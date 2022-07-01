//firebase
import { collection, onSnapshot, query } from "firebase/firestore"
import { db } from "../firebase/config"

//hooks
import { useEffect, useState } from "react"

export const useFetchDocuments = (docCollection) => {

    const [documents, setDocuments] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadData() {

            setLoading(true)

            const collectionRef = await collection(db, docCollection)

            try {
                
                let q
                q = await query(collectionRef)

                await onSnapshot(q, (querySnapShots) => {

                    setDocuments(
                        querySnapShots.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })

            } catch (error) {
                console.log(error)
                setError(error.message)
            }

            setLoading(false)
        }

        loadData()
    }, [docCollection])

    console.log(documents)

    return {documents, loading, error}
}