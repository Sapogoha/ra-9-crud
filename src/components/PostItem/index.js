import React from 'react';
import PropTypes from 'prop-types';

function PostItem({ id, content }) {
  return (
    <div className="card">
      {/* <img src="..." className="card-img-top" alt="user picture" /> */}
      <div className="card-body">
        <h5 className="card-title">Post №{id}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default PostItem;
