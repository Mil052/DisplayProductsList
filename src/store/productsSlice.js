import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("products/fetchProducts", async (address) => {
    const requestObject = {method: "GET"};
    const response = await fetch(address, requestObject)
        .then(response => {
            if (!response.ok) {
               throw response.status;
            }
            return response.json();
        });
    return response;
});

    // status: "fetchSuccess" | "fetchFail"
    // error: string | null

const productsSlice = createSlice ({
    name: "products",
    initialState: {
        items: [],
        total_pages: null,
        per_page: 5,
        page: null,
        total: null,
        status: null,
        error_code: null
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "fetchSuccess";
                let data_to_array = Array.isArray(action.payload.data) ? action.payload.data : [action.payload.data];
                state.items = data_to_array;
                    // Set response number of pages:
                state.total_pages = action.payload.total_pages ?? null;
                state.page = action.payload.page ?? null;
                    // Get actual number of products if is present in response
                if (action.payload.total) {
                    state.total = action.payload.total;
                }
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "fetchFail";
                state.error_code = action.error.message;
            })
    }
});

export default productsSlice.reducer;
export { fetchProducts };