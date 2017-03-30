# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def replaceChar(string):
    if string == '':
         return ''
    if string[0] == 'x':
        return ('y') + replaceChar(string[1:])
    else:
        return string[0] + replaceChar(string[1:])

print(replaceChar('xxxxxx valami XXX xxx yyyy YYY VALAMIIXXxxXX'))
