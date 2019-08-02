import React, { memo } from 'react';
import MaterialTable from 'material-table';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { deleteFromList } from './actions';
import { makeSelectList } from './selectors';
import reducer from './reducer';
// import console = require('console');

class VocabTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'From Language', field: 'native' },
        { title: 'Word', field: 'word' },
        { title: 'To Language', field: 'foreign' },

        {
          title: 'Translation',
          field: 'translation',
        },
      ],
    };
  }

  delFromList(id) {
    // eslint-disable-next-line react/prop-types
    const { list } = this.props;
    // console.log(list);
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].key === id) list.splice(i, 1);
      // eslint-disable-next-line react/prop-types
      this.props.deleteFromListCall(list);
    }
  }

  render() {
    return (
      <MaterialTable
        title="Vocabulary List"
        columns={this.state.columns}
        // eslint-disable-next-line react/prop-types
        data={this.props.list}
        editable={{
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                this.delFromList(oldData.key);
              }, 600);
            }),
        }}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  list: makeSelectList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    deleteFromListCall: list => dispatch(deleteFromList(list)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'list', reducer });

export default compose(
  withConnect,
  withReducer,
  memo,
)(VocabTable);
