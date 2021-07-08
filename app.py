from flask import Flask, render_template
import pygame
app = Flask('gameWebsite')


@app.route('/')
def defaultwebsite():
    return render_template('defaultwebsite.html')


@app.route('/buttongame')
def buttongame():
    return render_template('buttongame.html')


if __name__ == '__main__':
    app.run(debug=True)
