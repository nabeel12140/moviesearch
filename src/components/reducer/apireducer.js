const ProductReducer = (state, action) => {
    switch (action.type)
    {
    case "SET_LOADING":
        return {
            ...state,
            isloading:true,
        }
    case "SET_DATA":
        return{
            ...state,
            isloading:true,
            api_data:action.payload.Search,
        }
    case"SET_ERROR":
    return{
        ...state,
        isError:true,
    }

    default:
        return state;
    }
}
export default ProductReducer;