from flask import Flask, render_template, request

app = Flask(__name__)

# Route for the registration form page
@app.route('/')
def registration_form():
    return render_template('registration_form.html')

# Route to handle form submission
@app.route('/submit_form', methods=['POST'])
def submit_form():
    if request.method == 'POST':
        # Retrieve form data
        student_name = request.form['username']
        guardian_name = request.form['guardianname']
        address = request.form['address']
        school_name = request.form['schoolname']
        contact_number = request.form['contactno'] 
        selected_class = request.form['class']
        joining_date = request.form['date']
        gender = request.form['gender']

        # Checkbox values
        math = 'math' in request.form
        physics = 'physics' in request.form
        chemistry = 'chemistry' in request.form
        science = 'science' in request.form
        sainik_preparation = 'sainik' in request.form
        navodaya_preparation = 'navodaya' in request.form

        # Process the form data (you can save to a database or perform any other desired actions)
        # For demonstration purposes, I'm just printing the data
        print("Student Name:", student_name)
        print("Guardian's Name:", guardian_name)
        print("Address:", address)
        print("School Name:", school_name)
        print("Contact Number:", contact_number)
        print("Class:", selected_class)
        print("Joining Date:", joining_date)
        print("Gender:", gender)
        print("Mathematics:", math)
        print("Physics:", physics)
        print("Chemistry:", chemistry)
        print("Science:", science)
        print("Sainik Preparation:", sainik_preparation)
        print("Navodaya Preparation:", navodaya_preparation)

        # You can return a response to the user indicating success or redirect to another page
        return "Form submitted successfully!"
    else:
        # If the request method is not POST, return an error message or redirect to an error page
        return "Error: Method not allowed"


if __name__ == '__main__':
    app.run(debug=False, )
