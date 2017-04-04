class Person():

    def __init__(self, name="Jane Done", age= 30, gender="Female"):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm "+str(self.name)+" a " +str(self.age) +" year old " +str(self.gender)+".")

    def get_goal(self):
        self.text = "My goal is: Live for the moment!"
        print(self.text)

class Student(Person):

    def __init__(self, name="Jane Done", age=30, gender="Female", previous_organization = "Blizzard", skipped_days=0):
        super().__init__(name, age, gender)
        self.previous_organization = previous_organization
        self.skipped_days = skipped_days

    def get_goal(self):
        self.text = "Be a junior software developer."
        print(self.text)

    def introduce(self):
        print("Hi, I'm "+str(self.name)+" a " +str(self.age) +" year old " +str(self.gender)+" from " + str(self.previous_organization) + " who skipped " + str(self.skipped_days) + " days from the course already.")

    def skip_days(self, number_of_days):
        self.number_of_days = number_of_days
        self.skipped_days += self.number_of_days
        return self.skipped_days

class Mentor(Person):

    def __init__(self, name="Jane Done", age=30, gender="Female", level="Junior"):
        super().__init__(name, age, gender)
        self.level = level

    def get_goal(self):
        self.text = "Educate brilliant junior software developers."
        print(self.text)

    def introduce(self):
        print("Hi, I'm "+str(self.name)+" a " +str(self.age) +" year old " +str(self.gender)+str(self.level)+" mentor.")

class Sponsor(Person):

    def __init__(self, name="Jane Done", age=30, gender="Female", conpany="Blizzard", hired_students=0):
        super().__init__(name, age, gender)
        self.conpany = conpany
        self.hired_students = hired_students

    def introduce(self):
        print("Hi, I'm "+str(self.name)+" a " +str(self.age) +" year old " +str(self.gender)+" who represents " + str(self.conpany) + " and hired " + str(self.hired_students) + " students so far.")

    def get_goal(self):
        self.text = "Hire brilliant junior software developers."
        print(self.text)

    def hire(self):
        self.hired_students += 1

class LagopusClass():
    def __init__(self, class_name = "Lagopus"):
        self.students = []
        self.mentors = []
        self.class_name = class_name
    def add_student(self, Student):
        self.students.append(Student)

    def add_mentor(self, Mentor):
        self.mentors.append(Mentor)

    def info(self):
        self.students_size = len(self.students)
        self.mentors_size = len(self.mentors)
        print(self.class_name + " class has " + str(self.students_size)+ " students and " + str(self.mentors_size) + " mentors.")

#
#
# jane.introduce()
# jane.get_goal()
#
# student = Student("Jane Doe", 30, "Female","Blizzard", 0)
# student.get_goal()
# student.introduce()
# print(student.skip_days(10))
#
# master = Mentor("Jane Doe", 30, "Female"," intermediate")
# master.get_goal()
# master.introduce()
#
# boss = Sponsore("Jane Doe", 30, "Female", "Blizzard", 0)
# boss.hire()
# boss.get_goal()
# boss.introduce()

people = []

mark = Person('Mark', 46, 'male')
people.append(mark)
jane = Person()
people.append(jane)
john = Student('John Doe', 20, 'male', 'BME')
people.append(john)
student = Student()
people.append(student)
gandhi = Mentor('Gandhi', 148, 'male', 'senior')
people.append(gandhi)
mentor = Mentor()
people.append(mentor)
sponsor = Sponsor()
elon = Sponsor('Elon Musk', 46, 'male', 'SpaceX')
people.append(elon)
student.skip_days(3)

for i in range(5):
    elon.hire()

for i in range(3):
    sponsor.hire()

for member in people:
    member.introduce()
    member.get_goal()

badass = LagopusClass('BADA55')
badass.add_student(student);
badass.add_student(john);
badass.add_mentor(mentor);
badass.add_mentor(gandhi);
badass.info();
