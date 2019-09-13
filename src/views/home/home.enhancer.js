import { connect } from 'react-redux';
import compose from '../../utils/compose';

/**
|--------------------------------------------------
| Redux
|--------------------------------------------------
*/

const mapStateToProps = ({ example }) => ({
  value: example.value,
});

const mapDispatchToProps = (dispatch) => ({
  increment: dispatch.example.increment,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);
