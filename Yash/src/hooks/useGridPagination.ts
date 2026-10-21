import { useReducer, useEffect } from "react";
import { tableQueryParamsType } from "../utils/typedefs/GlobalCustomTypes";

export const ACTION_TYPES = {
  INCREMENT_PAGE: "INCREMENT_PAGE",
  DECREMENT_PAGE: "DECREMENT_PAGE",
  UPDATE_TOTALCOUNT: "UPDATE_TOTALCOUNT",
};

export default function useGridPagination({
  data,
  cacheKey = "Cached Grid Params",
}: {
  data: unknown[];
  cacheKey?: string;
}) {
  const initialParams: tableQueryParamsType = (() => {
    if (cacheKey) {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          return {
            page: 1,
            pageSize: 5,
            searchTerm: "",
            ...parsed,
            totalCount: data?.length || 0,
          };
        } catch {
          // ignore corrupted cache
        }
      }
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

  const { page = 1, pageSize = 5, totalCount } = tableQueryParams;

  useEffect(() => {
    const currentTotal = data?.length || 0;
    const maxPage = Math.max(1, Math.ceil(currentTotal / pageSize));
    if (page > maxPage) {
      updateTableQueryParams({ page: 1, totalCount: currentTotal });
    } else if (totalCount !== currentTotal) {
      updateTableQueryParams({ totalCount: currentTotal });
    }
  }, [data?.length, page, pageSize, totalCount]);

  useEffect(() => {
    if (cacheKey) {
      localStorage.setItem(cacheKey, JSON.stringify(tableQueryParams));
    }
  }, [cacheKey, tableQueryParams]);

  const executeUpdateTableQueryParams = (action: string) => {
    switch (action) {
      case ACTION_TYPES.INCREMENT_PAGE:
        updateTableQueryParams({ page: page + 1 });
        break;
      case ACTION_TYPES.DECREMENT_PAGE:
        updateTableQueryParams({ page: page - 1 });
        break;
      case ACTION_TYPES.UPDATE_TOTALCOUNT:
        updateTableQueryParams({ totalCount: data?.length || 0 });
        break;
    }
  };

  return [{ tableQueryParams }, { executeUpdateTableQueryParams }];
}
