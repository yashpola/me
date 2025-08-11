import { useReducer, useEffect } from "react";
import { tableQueryParamsType } from "../utils/typedefs/GlobalCustomTypes";

export const ACTION_TYPES = {
  INCREMENT_PAGE: "INCREMENT_PAGE",
  DECREMENT_PAGE: "DECREMENT_PAGE",
  UPDATE_TOTALCOUNT: "UPDATE_TOTALCOUNT",
};

export default function useGridPagination({ data }: { data: any[] }) {
  const initialParams: tableQueryParamsType = (() => {
    const cached = localStorage.getItem("Cached Grid Params");
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch {}
    }
    return {
      page: 1,
      pageSize: 5,
      totalCount: data?.length || 0,
      searchTerm: "",
    };
  })();

  const [tableQueryParams, updateTableQueryParams] = useReducer(
    (prev: tableQueryParamsType, next: Partial<tableQueryParamsType>) => ({
      ...prev,
      ...next,
    }),
    initialParams
  );

  useEffect(() => {
    localStorage.setItem(
      "Cached Grid Params",
      JSON.stringify(tableQueryParams)
    );
  }, [tableQueryParams]);

  const executeUpdateTableQueryParams = (action: string) => {
    const { page = 1 } = tableQueryParams || {};
    switch (action) {
      case ACTION_TYPES.INCREMENT_PAGE:
        updateTableQueryParams({ page: page + 1 });
        break;
      case ACTION_TYPES.DECREMENT_PAGE:
        updateTableQueryParams({ page: page - 1 });
        break;
      case ACTION_TYPES.UPDATE_TOTALCOUNT:
        updateTableQueryParams({ totalCount: data?.length });
        break;
    }
  };

  return [{ tableQueryParams }, { executeUpdateTableQueryParams }];
}
