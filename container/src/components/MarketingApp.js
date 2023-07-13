import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from 'react';

// Used to render the marketing app
// as directly calling the mount function in the App.js
// is not possible.
export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};