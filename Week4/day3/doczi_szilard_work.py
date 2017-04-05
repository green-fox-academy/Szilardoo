class Apple():

    def get_apple(self):
        return "apple"


class Numbers():

    def sum(self,elements):
    	if len(elements)==0:
        	return 0
    	else:
        	return elements[0] + sum(elements[1:]) 