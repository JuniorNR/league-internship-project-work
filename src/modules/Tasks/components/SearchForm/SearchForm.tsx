import { useState } from 'react';

import { SearchInput } from './../.././../../components/index';
import { TasksStatusFilter } from './../index';
import { FilterTypes } from 'domains/index';
import { FILTER_TYPES } from 'constants/filter_types';

import './SearchForm.css';

export const SearchForm = (): JSX.Element => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filterType, setFilterType] = useState<FilterTypes>(FILTER_TYPES.ALL);

  const onChangeSearchInput = (value: string): void => setSearchInputValue(value);

  const onResetSearchInput = (): void => setSearchInputValue('');

  const onChangeTasksStatusFilter = (type: FilterTypes) => {
    setFilterType(type);
  };

  return (
    <form className="searchForm d-flex justify-content-between align-items-center">
      <SearchInput onChange={onChangeSearchInput} value={searchInputValue} onReset={onResetSearchInput} />
      <TasksStatusFilter taskType={filterType} onChange={onChangeTasksStatusFilter} />
      <button className="btn btn-primary" type="button">
        Send
      </button>
    </form>
  );
};
