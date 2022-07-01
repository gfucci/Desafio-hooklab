//firebase
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

//hooks
import { useReducer, useState } from "react";

const initialState = {
    error: null,
    loading: null
}

const insertReducer = (state, action) => {

    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                error: null
            }
        case "INSERTED_DOC":
            return {
                loading: false,
                error: null
            }
        case "ERROR":
            return {
                loading:false,
                error: action.payload
            }
        default:
            return state
    }
}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(insertReducer, initialState)

    //deal with memory lick
    const [cancelled, setCancelled] = useState(false)

    const actionDispatch = (action) => {
        dispatch(action)
    }

    const insertDocument = async (document) => {

        try { 

            const newDocument = {...document, createdAt: Timestamp.now()}

            const insertedDoc = await addDoc(
                collection(db, docCollection),
                newDocument
            )

            actionDispatch({
                type: "INSERTED_DOC",
                payload: insertedDoc
            })

        } catch (error) {

            actionDispatch({
                type: "ERROR",
                payload: error.message
            })    
        }
    }         

    return { insertDocument, response }
}