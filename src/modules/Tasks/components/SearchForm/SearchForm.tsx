import { useState, MouseEvent } from 'react';

import { TasksStatusFilter } from './../index';
import { SearchInput } from 'components/index';
import { FilterTypes, SearchFormEntity } from 'domains/index';
import { FILTER_TYPES } from 'constants/filter_types';

import './SearchForm.css';

export const SearchForm = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filterType, setFilterType] = useState<FilterTypes>(FILTER_TYPES.ALL);

  const onChangeSearchInput = (value: string): void => setSearchInputValue(value);

  const onResetSearchInput = (): void => setSearchInputValue('');

  const onChangeTasksStatusFilter = (type: FilterTypes): void => setFilterType(type);

  const onSubmitFormSearch = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(searchInputValue, filterType);
  };

  return (
    <form className="searchForm d-flex justify-content-between align-items-center">
      <SearchInput onChange={onChangeSearchInput} value={searchInputValue} onReset={onResetSearchInput} />
      <TasksStatusFilter taskType={filterType} onChange={onChangeTasksStatusFilter} />
      <button className="btn btn-primary" type="button" onClick={(event) => onSubmitFormSearch(event)}>
        Send
      </button>
    </form>
  );
};
