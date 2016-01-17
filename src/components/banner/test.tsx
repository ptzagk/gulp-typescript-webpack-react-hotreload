import { expect } from 'chai';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-addons-test-utils';
import Banner, { BannerKind } from './index';

describe('banner', function () {
  it('works', function () {
    const instance = TestUtils.renderIntoDocument(
      <Banner kind={BannerKind.primary} />
    );
    
    expect(instance).to.be.ok;
  });
});