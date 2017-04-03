# Create a PostIt class that has
# a backgroundColor
# a text on it
# a textColor
# Create a few example post-it objects:
# an orange with blue text: "Idea 1"
# a pink with black text: "Awesome"
# a yellow with green text: "Superb!"

class PostIt():
    backgroundColor = ''
    text_on_it = ''
    textColor = ''

orange = PostIt()
pink = PostIt()
yellow = PostIt()

orange.backgroundColor = 'orange'
orange.text_on_it = 'Idea 1'
orange.textColor = 'blue'
pink.backgroundColor = 'pink'
pink.text_on_it = 'Awesome'
pink.textColor = 'blue'
yellow.backgroundColor = 'yellow'
yellow.text_on_it = 'Superb!'
yellow.textColor = 'green'

print("Backgroundcolor: " + orange.backgroundColor + " Text: " + orange.text_on_it + " Text color: " + orange.textColor)
