import $ from 'jquery';

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

export function getGithubUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username + '?client_id=de394bd46768f856eef0',
    dataType: 'jsonp'
  }).promise();
}