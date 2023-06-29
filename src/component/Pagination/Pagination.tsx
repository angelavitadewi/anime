import { FlexContainer, PaginateCtn, RoundEffect } from './SubcomponentPagination/SubcomponentPagination';

interface IPaginationProps {
  total: number;
  page: number;
  perPage: number;
  handlePageChanged: (page: number, perPage: number) => void;
}
export function Pagination({ total, page, perPage, handlePageChanged }: IPaginationProps) {
  let maxPages = Math.ceil(total / perPage);
  let items = [];
  let leftSide = page - 2;
  if (leftSide <= 0) leftSide = 1;
  let rightSide = page + 2;
  if (rightSide > maxPages) rightSide = maxPages;
  for (let number = leftSide; number <= rightSide; number++) {
    items.push(
      <RoundEffect
        key={number}
        isActive={number === page}
        onClick={() => {
          handlePageChanged(number, perPage);
        }}
      >
        {number}
      </RoundEffect>,
    );
  }
  const nextPage = () => {
    if (page < maxPages) {
      handlePageChanged(page + 1, perPage);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      handlePageChanged(page - 1, perPage);
    }
  };

  const paginationRender = (
    <FlexContainer>
      <PaginateCtn>
        <RoundEffect onClick={prevPage}> &lsaquo; </RoundEffect>
        {items}
        <RoundEffect onClick={nextPage}> &rsaquo; </RoundEffect>
      </PaginateCtn>
    </FlexContainer>
  );
  return paginationRender;
}
