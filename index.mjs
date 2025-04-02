export default {
	fetch(request, env, ctx) {
	  const headers = new Headers();
	  headers.set("set-cookie", "foo=bar")
	  return Response.json(headers.getSetCookie())
	},
  };
