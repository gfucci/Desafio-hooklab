//firebase
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

//hooks
import { useReducer } from "react";

const initialState = {
    error: null,
    loading: null
}

const deleteReducer = (state, action) => {

    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                error: null
            }
        case "DELETED_DOC":
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

export const useDeleteDocument = (docCollection) => {

    const [response, dispatch] = useReducer(deleteReducer, initialState)

    const actionDispatch = (action) => {
        dispatch(action)
    }

    const deleteDocument = async (id) => {

        try { 

            const deletedDocument = await deleteDoc(
                doc(db, docCollection, id),
            )

            actionDispatch({
                type: "DELETED_DOC",
                payload: deletedDocument
            })

        } catch (error) {

            actionDispatch({
                type: "ERROR",
                payload: error.message
            })    
        }
    }         

    return { deleteDocument, response }
}