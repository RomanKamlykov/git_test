exports.handler = async function(event, context) {
  const { identity, user } = context.clientContext;
  
  return {
    statusCode: 200,
    body: JSON.stringify({ identity, user }),
    headers: {
      'Content-Type': 'application/json',
    },
  }
}
