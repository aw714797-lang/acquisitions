export const cookies = {
  getOptions: () => ({sameSite: 'Strict'... }),

  set: (res, name, value, options = {}) => {
    res.cookie(name, value, {...cookies.getOptions(), ...options});
  },

  clear: (res, name, options = {}) => {
    res.clearCookie(name, {...cookies.getOptions(), ..options});
  },

  get: (req, name) => {
    return req.cookies[name];
  }	  
}
