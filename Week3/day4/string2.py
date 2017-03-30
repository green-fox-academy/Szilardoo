# Given a string, compute recursively a new string where all the 'x' chars have been removed.


def replaceChar(string):
    if string == '':
         return ''
    if string[0] == 'x' or string[0] == 'X':
        return ('') + replaceChar(string[1:])
    else:
        return string[0] + replaceChar(string[1:])

print(replaceChar('xxxxxx valami XXX xxx yyyy YYY VALAMIIXXxxXX'))
