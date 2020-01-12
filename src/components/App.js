import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
  }

  shouldComponentUpdate () {
    return false;
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
          <ReduxToastr
            timeOut={10000}
            newestOnTop={false}
            preventDuplicates
            position='top-right'
            transitionIn='bounceInDown'
            transitionOut='bounceOutUp'
            progressBar
          />
        </div>
      </Provider>
    );
  }
}

export default App;
