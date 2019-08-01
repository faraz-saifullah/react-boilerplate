import React, { memo } from 'react';
import MaterialTable from 'material-table';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
// eslint-disable-next-line import/named
import { makeSelectList } from './selectors';
// import console = require('console');

export function VocabTable(list) {
  const [state, setState] = React.useState({
    columns: [
      { title: 'From Language', field: 'native' },
      { title: 'Word', field: 'word' },
      { title: 'To Language', field: 'foreign' },
      {
        title: 'Translation',
        field: 'translation',
      },
    ],
  });

  return (
    <MaterialTable
      title="Vocabulary List"
      columns={state.columns}
      data={list.list}
      editable={{
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

export function mapDispatchToProps() {
  return {
    //   onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    //   onSubmitForm: evt => {
    //     if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //     dispatch(loadRepos());
    //   },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(VocabTable);
