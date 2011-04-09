from flask import Flask, send_file
app = Flask(__name__)

@app.route('/<path:path>')
def index(path):
    return send_file(path)

if __name__ == '__main__':
    app.run('0.0.0.0',port=80, debug=True)
