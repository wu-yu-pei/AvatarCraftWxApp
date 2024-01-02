export default {
	login:data => uni.$u.http.post('user/login', data)
}