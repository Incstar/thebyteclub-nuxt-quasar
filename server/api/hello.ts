export default defineEventHandler((event) => {
    console.log('server route requested');
    console.log('event: ', event);
    return {
      hello: 'world'
    }
  })
  