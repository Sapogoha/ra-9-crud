import React from 'react';
import PropTypes from 'prop-types';

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

function PostItem({ id, content, created }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          Post №{id}{' '}
          <p className="card-text time">{dayjs(created).fromNow()}</p>
        </h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
};

export default PostItem;
