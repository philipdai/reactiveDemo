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
}