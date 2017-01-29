export function getSubscriber(id) {
  return {
    next(x) {
      console.log(`${id}: ${x}`);
    }, error(err) {
      console.log(`error: ${id}: ${err}`);
    }, complete(complete) {
      console.log(`${id}: Completed...`);
  }
  };
};

export function getObjectSubscriber(id) {
  return {
    next(x) {
      console.log(`${id}: ${JSON.stringify(x)}`);
    }, error(err) {
      console.log(`error: ${id}: ${err}`);
    }, complete(complete) {
      console.log(`${id}: Completed...`);
    }
  };
};