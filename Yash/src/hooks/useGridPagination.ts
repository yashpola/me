import { useReducer } from "react"
import { tableQueryParamsType } from "../utils/typedefs/GlobalCustomTypes"

export const ACTION_TYPES = {
    INCREMENT_PAGE: "INCREMENT_PAGE",
    DECREMENT_PAGE: "DECREMENT_PAGE"
}

export default function useGridPagination({data}: {data: any[]}) {
    const [tableQueryParams, updateTableQueryParams] = useReducer((prev: tableQueryParamsType, next: tableQueryParamsType) => {{
        return {...prev, ...next}
    }}, {
        page: 1,
        pageSize: 5,
        totalCount: data?.length || 0,
        searchTerm: "",
    })

    const executeUpdateTableQueryParams = (action: string) => {
        const {page = 1} = tableQueryParams || {}
        switch (action) {
            case ACTION_TYPES.INCREMENT_PAGE:
                updateTableQueryParams({page: page + 1})
                break;
            case ACTION_TYPES.DECREMENT_PAGE:
                 updateTableQueryParams({page: page - 1})
                 break;
        }       
    }

    return [{tableQueryParams}, {executeUpdateTableQueryParams}]
}