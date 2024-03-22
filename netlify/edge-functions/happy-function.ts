export default () => new Response("No error here, just a simple response from an Edge Function");

export const config = { 
  path: "/happy-function" 
};
