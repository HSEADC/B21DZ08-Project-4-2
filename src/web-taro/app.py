from flask import Flask, render_template, request, jsonify
import gen_prediction
from gen_prediction import gen_predict

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    message = request.form['message']
    prediction = gen_predict(message)
    if prediction.choose_category() is not None:
        prediction.choose_category()
        prediction.random_cards()
        result = {
            'names': prediction.write_names(),
            'prediction': prediction.make_pred()
        }
    else:
        result = {
            'error': "Ты точно хочешь раскладик?"
        }
    return jsonify(result)


if __name__ == '__main__':
    app.run()