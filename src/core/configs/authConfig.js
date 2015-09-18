APP.angular.config(['helloProvider', authConfig])

function authConfig (helloProvider) {

	helloProvider.init(
	{
		google: '529353693096-3opefotu1hvgfeud5a05e31o3718hqgk.apps.googleusercontent.com'
	}, 
	{
		redirect_uri: 'https://default-web-brazilsouth810fa3cca234495caf363549720e67c1.azurewebsites.net/signin-google'
	});
}