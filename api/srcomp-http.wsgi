from sr.comp.http import app

from werkzeug.wsgi import DispatcherMiddleware

app.config['COMPSTATE'] = '/srv/state'

app.wsgi_app = DispatcherMiddleware(app.wsgi_app, {
    '/comp-api': app.wsgi_app
})

bind = '[::]:80'
keepalive = 5
