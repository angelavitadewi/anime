import { useState } from 'react';
import MetaObject from '../models/MetaObject';

const usePagination = (meta?: MetaObject) => {
  const [metaObj, setMetaObj] = useState<MetaObject>(meta || new MetaObject({ perPage: 10, page: 1 }));

  const handlePageChanged = (page: number, pageSize: number) =>
    setMetaObj(metaObj.clone().setPage(page).setPerPage(pageSize));

  const handlePageSizeChanged = (current: number, pageSize: number) =>
    setMetaObj(metaObj.clone().setPage(current).setPerPage(pageSize));

  const handleSearchChanged = (search: string) => search && setMetaObj(metaObj.clone().setSearch(search));

  return { meta: metaObj.get(), handlePageChanged, handlePageSizeChanged, handleSearchChanged };
};

export default usePagination;
