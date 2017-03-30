# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def add_a_star(string):
    if string == '':
         return ''
    else:
        return string[0] +'*'+add_a_star(string[1:])

print(add_a_star('xxxxxx valami XXX xxx yyyy YYY VALAMIIXXxxXX'))
