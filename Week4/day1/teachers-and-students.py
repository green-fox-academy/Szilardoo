# Create Student and Teacher classes
# Student
# learn()
# question(teacher) -> calls the teachers answer method
# Teacher
# teach(student) -> calls the students learn method
# answer()



class Student():

    def learn(slef):
        print("Student is learning...")

    def question(self):
        Teacher.answer(self)

class Teacher():

    def teach(self):
        Student.learn(self)

    def answer(self):
        print("Teacher is answering...")


student = Student()
student.question()
teacher = Teacher()
teacher.teach()
