export{}


await browser.waitUntil(
  async () => {
    const state = await browser.execute(() => document.readyState);
    return state === 'complete';
  },
  {
    timeout: 10000,
    timeoutMsg: 'Page did not load completely within 10 seconds'
  }
);

