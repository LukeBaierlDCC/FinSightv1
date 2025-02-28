"""
The flask application package.
"""

from flask import Flask

app = Flask(__name__)

# Import views after app is created to avoid circular import
import FinSight.views