import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import { TasksStoreInstance } from './../../store/index';

import { TasksStatusFilter } from './../index';
import { SearchInput } from 'components/index';
import { FilterTypes, SearchFormEntity } from 'domains/index';
import { FILTER_TYPES } from 'constants/filter_types';

import './SearchForm.css';

export const SearchForm = (): JSX.Element => {
  const defaultValues: SearchFormEntity = {
    searchValue: '',
    filterType: FILTER_TYPES.ALL,
  };

  const { updateTasks } = TasksStoreInstance;

  const { setValue, handleSubmit, control } = useForm<SearchFormEntity>({ defaultValues });

  const onChangeTasksStatusFilter = (type: FilterTypes) => setValue('filterType', type);
  const onChangeSearchInput = (value: string) => setValue('searchValue', value);

  const onResetSearchInput = () => setValue('searchValue', '');

  const onSubmitFormSearch: SubmitHandler<SearchFormEntity> = (data: SearchFormEntity): void => {
    updateTasks(data);
  };

  return (
    <form
      className="searchForm d-flex justify-content-between align-items-center"
      onSubmit={handleSubmit(onSubmitFormSearch)}>
      <Controller
        control={control}
        name="searchValue"
        render={({ field: { value } }) => (
          <SearchInput onChange={onChangeSearchInput} value={value} onReset={onResetSearchInput} />
        )}
      />
      <Controller
        control={control}
        name="filterType"
        render={({ field: { value } }) => <TasksStatusFilter taskType={value} onChange={onChangeTasksStatusFilter} />}
      />
      <button className="btn btn-primary" type="submit">
        Send
      </button>
    </form>
  );
};
