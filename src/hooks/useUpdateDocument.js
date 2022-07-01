//firebase
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

//hooks
import { useReducer } from "react";

const initialState = {
    error: null,
    loading: null
}

const updateReducer = (state, action) => {

    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                error: null
            }
        case "UPDATED_DOC":
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

export const useUpdateDocument = (docCollection) => {

    const [response, dispatch] = useReducer(updateReducer, initialState)

    const actionDispatch = (action) => {
        dispatch(action)
    }

    const updateDocument = async (uid, data) => {

        try { 

            const updatedDocument = await updateDoc(
                doc(db, docCollection, uid),
                data
            )

            actionDispatch({
                type: "UPDATED_DOC",
                payload: updatedDocument
            })

        } catch (error) {

            actionDispatch({
                type: "ERROR",
                payload: error.message
            })    
        }
    }         

    return { updateDocument, response }
}