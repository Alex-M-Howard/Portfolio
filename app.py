from flask import Flask, render_template, url_for
from werkzeug.exceptions import HTTPException
from config import set_config
import os

# Create Flask app
app = Flask(__name__)


# Configure Setup
set_config(app)


# Custom error handlers
# @app.errorhandler(HTTPException)
# @app.errorhandler(Exception)
# def handle_error(e):
#     print(dir(e))
#     print(e)
#     print(e.get_headers())
#     print(e.get_description())
#     print(e.get_response())
#     if e.code == None:
#         e.code == 500
    
#     if e.description == None:
#         e.description = "Something went wrong. Please try again later."
        
#     return render_template('error.html', error=e)


@app.route("/")
def home():
    return render_template('home.html')

@app.route("/todo")
def todo():
    return render_template('/projects/todo.html')

@app.route("/memory-game")
def memory_game():
    return render_template('/projects/memory.html')

@app.route("/frasier")
def frasier():
    return render_template('/projects/frasier/index.html')

@app.route("/resume")
def resume():
    return render_template('/resume.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=os.environ.get("$PORT"))
