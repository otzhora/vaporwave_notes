from uuid import uuid4

from flask import Flask
from flask import request, send_from_directory
from flask_cors import CORS

app = Flask(__name__)

notes_dict = {
    "eeea632e-c9ca-449b-93fc-fc084682c002": {
        "title": "example note title",
        "body": "expample note body"
    }
}


@app.route("/")
def main():
    return app.send_static_file('index.html')


@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('static/js', path)


@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('static/css', path)


@app.route('/notes')
def notes():
    return notes_dict


@app.route('/notes', methods=["POST"])
def add_note():
    id = str(uuid4())
    notes_dict[id] = request.json
    return {"res": "ok", "id": id}


@app.route('/notes/<note_id>', methods=["DELETE"])
def del_note(note_id):
    if not note_id in notes_dict:
        return "Note id not in dict"
    del notes_dict[note_id]
    return "ok"


@app.route('/notes/<note_id>', methods=["PUT"])
def update_note(note_id):
    if not note_id in notes_dict:
        return "Note id not in dict"
    notes_dict[note_id] = request.json
    return "ok"
