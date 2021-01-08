import { assert } from 'chai';
import { SnapsResponse, SnapStatusResponse } from '../lib/types';
import * as screensnapsIO from '../dist/src/index';
require('dotenv').config();

// loading keys from env file
const keys = {
  api_key: process.env.API_KEY,
  user_id: process.env.USER_ID,
};

describe('Checking Config', () => {
  it('checking keys', () => {
    assert.isObject(keys, 'Keys is not an Object');
    assert.isDefined(keys.api_key, 'API Key is not defined');
    assert.isDefined(keys.api_key, 'API Key is not defined');
    assert.isDefined(keys.user_id, 'User ID is not defined');
    assert.isNotEmpty(keys.api_key, 'API Key is Empty');
    assert.isNotEmpty(keys.user_id, 'API Key is Empty');
  });
});

describe('Endpoint Tests', () => {
  it('checking /status', () => {
    return screensnapsIO
      .status({
        apiKey: keys.api_key,
        userId: keys.user_id,
      })
      .then((res: SnapStatusResponse) => {
        assert.isString(res.status, 'status is not string');
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          assert.fail(
            0,
            1,
            `FAIL: ${err.response.status} - ${JSON.stringify(
              err.response.data,
            )}`,
          );
        }
      });
  });

  it('checking /screenshots', () => {
    return screensnapsIO
      .screenshots(
        {
          apiKey: keys.api_key,
          userId: keys.user_id,
        },
        { offset: 0, limit: 15 },
      )
      .then((res: SnapsResponse) => {
        assert.isArray(res.items, '`res.items` is not an array');
        assert.isString(res.status, '`res.status` is not an string');
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          assert.fail(
            0,
            1,
            `FAIL: ${err.response.status} - ${JSON.stringify(
              err.response.data,
            )}`,
          );
        }
      });
  });
});
