from app import create_app

app = create_app()

if __name__ == "__main__":
    from livereload import Server
    server = Server(app.wsgi_app)

    server.watch('templates/')
    server.watch('static/')
    server.serve(port=5000, host='127.0.0.1')