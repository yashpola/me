import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import { tableQueryParamsType } from "../../utils/typedefs/GlobalCustomTypes";
import FlexColumn from "../layouts/FlexColumn";
import FlexRow from "../layouts/FlexRow";
import Caption from "../typography/Caption";

export default function PaginationHeader({
  paginationProps,
  paginationActions,
}: {
  paginationProps: tableQueryParamsType;
  paginationActions: {
    onClickNavigateBefore: () => void;
    onClickNavigateNext: () => void;
  };
}) {
  const { page = 1, pageSize = 5, totalCount = 5 } = paginationProps;
  const { onClickNavigateBefore, onClickNavigateNext } = paginationActions;

  return (
    <FlexRow style={{ justifyContent: "center" }}>
      <div>
        {page > 1 && (
          <NavigateBefore
            className="site-button"
            onClick={onClickNavigateBefore}
          />
        )}
      </div>
      <FlexColumn style={{ margin: "15px" }}>
        <div>
          Page {page} of {Math.ceil(totalCount / pageSize)}
        </div>
        <Caption>
          <div>
            Showing {(page - 1) * pageSize + 1} -{" "}
            {Math.min((page - 1) * pageSize + pageSize, totalCount)} of{" "}
            {totalCount}.
          </div>
        </Caption>
      </FlexColumn>
      <div>
        {page < Math.ceil(totalCount / pageSize) && (
          <NavigateNext className="site-button" onClick={onClickNavigateNext} />
        )}
      </div>
    </FlexRow>
  );
}
