import os
from dotenv import load_dotenv

load_dotenv()

def set_config(app):
    app.config["TEMPLATES_AUTO_RELOAD"] = True
    app.config["SECRET_KEY"] = os.getenv('SECRET_KEY')
